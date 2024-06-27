import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'ipx-menu-main',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf],
  templateUrl: './menu-main.component.html'
})
export class MenuMainComponent extends AppAbstract implements OnInit {
  protected user!: UserInterface;

  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.user = login.users[0];
    }
  }
}
