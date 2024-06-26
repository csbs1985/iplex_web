import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { MenuSettingsEnum } from '../../../enums/menu-settings.enum';

@Component({
  selector: 'ipx-menu-settings',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './menu-settings.component.html'
})
export class MenuSettingsComponent extends AppAbstract implements OnInit {
  @Output() menuSettingsOutput = new EventEmitter<MenuSettingsEnum>();

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
    console.log(item);
    this.menuSettingsOutput.emit(item);
  }
}
