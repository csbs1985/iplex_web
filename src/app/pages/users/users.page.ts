import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { UserInterface } from '../../models/user.interface';

@Component({
  standalone: true,
  imports: [TranslateModule, NgFor, NgIf, RouterModule],
  templateUrl: './users.page.html'
})
export class UsersPage extends AppAbstract implements OnInit {
  protected listUsers: UserInterface[] = [];
  protected userSelected!: UserInterface;

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.listUsers = login.users;
      this.getFirstUser();
    }
  }

  private getFirstUser(): void {
    this.userSelected = this.listUsers[0];
  }

  protected selectUser(user: any): void {
    this.userSelected = user;
    this._router.navigate(['/recharge']);
  }
}
