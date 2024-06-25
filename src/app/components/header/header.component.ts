import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'ipx-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf],
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AppAbstract implements OnInit {
  protected user!: UserInterface;

  ngOnInit(): void {
      this.getUser();
  }

  private getUser(){
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.user = login.users[0];
    }
  }
}
