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


  ngOnInit(): void {
    this.getLanguage();
  }

  private getLanguage(): void {
    if (typeof localStorage !== 'undefined') {
      const defaultLange = JSON.parse(localStorage.getItem('language') || LanguageEnum.ENGLISH);

      this._languageService.languageSelected = defaultLange as LanguageEnum;
    }
  }
}
