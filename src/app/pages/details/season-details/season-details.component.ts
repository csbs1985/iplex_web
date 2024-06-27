import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppAbstract } from '../../../app.abstract';

@Component({
  selector: 'ipx-season-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './season-details.component.html'
})
export class SeasonDetailsComponent extends AppAbstract {
  protected seasonsSelected = 'Season 1';

  protected listSeasons = ['Season 1', 'Season 2', 'Season 3'];

  protected listEpisodes = [
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    },
    {
      photo_url: 'https://tm.ibxk.com.br/2018/11/29/29161447396167.jpg?img=1920x780',
      title: 'Prologo',
      season: '1',
      episode: '1',
      duration: '24m3s',
      overview: 'A Disney lançou nesta semana trailers de blockbusters há muito aguardados pelos fãs, como “Toy Story 4” e a versão “live-action animada” de “O Rei Leão”.'
    }
  ];

  protected selectSeason(item: string): void {
    this.seasonsSelected = item;
  }
}
