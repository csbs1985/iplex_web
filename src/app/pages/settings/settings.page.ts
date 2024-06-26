import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { MenuSettingsEnum } from '../../enums/menu-settings.enum';
import { LanguageSettingsComponent } from './language-settings/language-settings.component';
import { MenuSettingsComponent } from './menu-settings/menu-settings.component';

@Component({
  selector: 'ipx-settings.page',
  standalone: true,
  imports: [NgIf, TranslateModule, MenuSettingsComponent, LanguageSettingsComponent],
  templateUrl: './settings.page.html'
})
export class SettingsPage extends AppAbstract implements OnInit {
  menuSettingsEnum: typeof MenuSettingsEnum = MenuSettingsEnum;

  protected menuSettingsSelected: MenuSettingsEnum = MenuSettingsEnum.LANGUAGE;

  ngOnInit(): void {
  }

  protected menuSettingsOutput(event: MenuSettingsEnum): void {
    this.menuSettingsSelected = event;
  }
}
