import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { LanguageEnum } from '../../../enums/language.enum';

@Component({
  selector: 'ipx-language-settings',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './language-settings.component.html'
})
export class LanguageSettingsComponent extends AppAbstract implements OnInit {
  protected languageSelected = LanguageEnum.ENGLISH;

  protected listLanguage = [
    {
      language: 'English',
      code: LanguageEnum.ENGLISH,
      icon: 'assets/icon/en.svg'
    },
    {
      language: 'Español',
      code: LanguageEnum.SPANISH,
      icon: 'assets/icon/es.svg'
    },
    {
      language: 'Deutsch',
      code: LanguageEnum.GERMAN,
      icon: 'assets/icon/de.svg'
    },
    {
      language: 'Français',
      code: LanguageEnum.FRANCE,
      icon: 'assets/icon/fr.svg'
    },
    {
      language: 'Italiano',
      code: LanguageEnum.ITALIAN,
      icon: 'assets/icon/it.svg'
    },
    {
      language: 'Português',
      code: LanguageEnum.PORTUGUESE,
      icon: 'assets/icon/br.svg'
    }
  ];

  ngOnInit(): void {
    this.getLanguage();
  }

  private getLanguage(): void {
    if (typeof localStorage !== 'undefined') {
      const defaultLange = JSON.parse(localStorage.getItem('language') || LanguageEnum.ENGLISH);

      this.languageSelected = defaultLange as LanguageEnum;
    }
  }

  protected setLanguage(lang: LanguageEnum): void {
    this.languageSelected = lang;
    this._languageService.setLanguage(lang);
  }
}
