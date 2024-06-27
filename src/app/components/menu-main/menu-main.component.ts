import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { MenuMainEnum } from '../../enums/menu-main.enum';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { MenuMainInterface } from '../../models/menu-main.interface';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'ipx-menu-main',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf],
  templateUrl: './menu-main.component.html'
})
export class MenuMainComponent extends AppAbstract implements OnInit {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  protected user!: UserInterface;
  protected menuMainSelected: MenuMainEnum = MenuMainEnum.HOME;

  protected listMenuMainTop: MenuMainInterface[] = [
    {
      "route": "/",
      "icon": "assets/icon/home.svg",
      "text": MenuMainEnum.HOME
    },
    {
      "route": "/search",
      "icon": "assets/icon/search.svg",
      "text": MenuMainEnum.SEARCH
    },
    {
      "route": `/catalog/${TypeMidiaEnum.CONTINUE_WATCHING}`,
      "icon": "assets/icon/continue_watching.svg",
      "text": MenuMainEnum.CONTINUE_WATCHING
    },
    {
      "route": `/catalog/${TypeMidiaEnum.FAVORITE}`,
      "icon": "assets/icon/favorites.svg",
      "text": MenuMainEnum.FAVORITES
    },
    {
      "route": `/catalog/${TypeMidiaEnum.CHANNEL}`,
      "icon": "assets/icon/channels.svg",
      "text": MenuMainEnum.CHANNEL
    },
    {
      "route": `/catalog/${TypeMidiaEnum.MOVIE}`,
      "icon": "assets/icon/movies.svg",
      "text": MenuMainEnum.MOVIES
    },
    {
      "route": `/catalog/${TypeMidiaEnum.SERIE}`,
      "icon": "assets/icon/series.svg",
      "text": MenuMainEnum.SERIES
    },
    {
      "route": `/catalog/${TypeMidiaEnum.DOCUMENTARY}`,
      "icon": "assets/icon/documentaries.svg",
      "text": MenuMainEnum.DOCUMENTARIES
    },
    {
      "route": `/catalog/${TypeMidiaEnum.SHOW}`,
      "icon": "assets/icon/shows.svg",
      "text": MenuMainEnum.SHOWS
    },
    {
      "route": `/catalog/${TypeMidiaEnum.STAND_UP}`,
      "icon": "assets/icon/stand_up.svg",
      "text": MenuMainEnum.STAND_UP
    },
    {
      "route": `/catalog/${TypeMidiaEnum.ADULT}`,
      "icon": "assets/icon/adults.svg",
      "text": MenuMainEnum.ADULTS
    }
  ];

  protected listMenuMainBottom: MenuMainInterface[] = [
    {
      "route": "/recharge",
      "icon": "assets/icon/recharge.svg",
      "text": MenuMainEnum.RECHARGE
    },
    {
      "route": "/settings",
      "icon": "assets/icon/settings.svg",
      "text": MenuMainEnum.SETTINGS
    }
  ]

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.user = login.users[0];
    }
  }

  protected selectMenuMain(item: MenuMainInterface): void {
    this.menuMainSelected = item.text;
    this._router.navigate([item.route]);
  }
}
