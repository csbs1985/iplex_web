import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { HeaderComponent } from '../../components/header/header.component';
import { LastMidiaComponent } from '../../components/last-midia/last-midia.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { PlaylistItem } from '../../models/playlist.interface';

@Component({
  standalone: true,
  imports: [LastMidiaComponent, HeaderComponent, LoadingComponent, NgIf, TranslateModule],
  templateUrl: './home.page.html'
})
export class HomePage extends AppAbstract implements OnInit {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  protected listChannels: PlaylistItem[] = [];
  protected listMovies: PlaylistItem[] = [];
  protected listSeries: PlaylistItem[] = [];

  ngOnInit(): void {
    this.getHomeChannels();
  }

  private getHomeChannels(): void {
    this.listChannels = this._midiaService.listChannels;

    this.getHomeMovies();
  }

  private getHomeMovies(): void {
    this.listMovies = this._midiaService.listMovies.slice(0, 10);

    this.getHomeSeries();
  }

  private getHomeSeries(): void {
    this.listSeries = this._midiaService.listSeries.slice(0, 10);
  }
}
