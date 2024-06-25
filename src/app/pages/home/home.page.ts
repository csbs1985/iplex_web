import { Component, OnInit } from '@angular/core';
import { Channel } from 'diagnostics_channel';
import { AppAbstract } from '../../app.abstract';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  standalone: true,
  imports: [MenuComponent, HeaderComponent],
  templateUrl: './home.page.html'
})
export class HomePage extends AppAbstract implements OnInit {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  channels: Channel[] = [];
  currentChannelIndex = 0;

  ngOnInit(): void {
    this.getPlaylistData();
  }

  getPlaylistData(): void {
    this._apiService.fetchChannelList()
      .subscribe((channels: any) => {
        this.channels = channels;
      }, error => {
        console.error(error);
      });

      console.log(this.channels);
  }
}
