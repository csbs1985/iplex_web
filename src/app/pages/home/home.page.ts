import { Component, OnInit } from '@angular/core';
import { Channel } from 'diagnostics_channel';
import { AppAbstract } from '../../app.abstract';
import { MenuFilmsComponent } from '../../components/menu-films/menu-films.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  selector: 'ipx-home.page',
  standalone: true,
  imports: [MenuFilmsComponent],
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
