import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { LoginInterface } from '../../../models/login.interface';
import { UserInterface } from '../../../models/user.interface';

@Component({
  selector: 'ipx-user-settings',
  standalone: true,
  imports: [TranslateModule, NgIf, NgFor],
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent extends AppAbstract implements OnInit {
  protected login!: LoginInterface;
  protected listUsers: UserInterface[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  protected getUsers(): void {
    if (typeof localStorage !== 'undefined') {
      const defaultLange = localStorage.getItem('login');

      if (defaultLange !== null) {
        this.login = JSON.parse(defaultLange);
        this.listUsers = this.login.users;
        console.log(this.listUsers);
        
      }
    }
  }
}
