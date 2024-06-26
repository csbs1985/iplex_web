import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { MenuSettingsEnum } from '../../../enums/menu-settings.enum';


@Component({
  selector: 'ipx-menu-settings',
  standalone: true,
  imports: [TranslateModule, NgFor, RouterModule],
  templateUrl: './menu-settings.component.html'
})
export class MenuSettingsComponent extends AppAbstract implements OnInit {
  @Input() menuSettingsSelected: MenuSettingsEnum = MenuSettingsEnum.USER;
  @Output() menuSettingsOutput = new EventEmitter<MenuSettingsEnum>();

  protected menuSettingsEnum: typeof MenuSettingsEnum = MenuSettingsEnum;

  protected listMenuSettings = [
    {
      icon: 'assets/icon/user.svg',
      text: 'USER',
      link: MenuSettingsEnum.USER
    },
    {
      icon: 'assets/icon/language.svg',
      text: 'LANGUAGE',
      link: MenuSettingsEnum.LANGUAGE
    },
    {
      icon: 'assets/icon/memory.svg',
      text: 'MEMORY',
      link: MenuSettingsEnum.MEMORY
    },
  ];

  ngOnInit(): void { }

  protected selectMenuSettings(item: MenuSettingsEnum): void {
    this.menuSettingsOutput.emit(item);
  }
}
