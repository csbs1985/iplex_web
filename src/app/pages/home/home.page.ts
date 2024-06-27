import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MenuMainComponent } from '../../components/menu-main/menu-main.component';
import { PreviewComponent } from '../../components/preview/preview.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { MidiaInterface } from '../../models/midia.interface';

@Component({
  standalone: true,
  imports: [PreviewComponent, MenuMainComponent, LoadingComponent, NgIf, TranslateModule],
  templateUrl: './home.page.html'
})
export class HomePage extends AppAbstract implements OnInit {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  protected listChannels: MidiaInterface[] = [];
  protected listMovies: MidiaInterface[] = [];
  protected listSeries: MidiaInterface[] = [];

  ngOnInit(): void {
    this.getHomeChannels();
  }

  private getHomeChannels(): void {
    this.listChannels = this._midiaService.listChannels.slice(0, 10);

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
