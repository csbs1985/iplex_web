import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  selector: 'ipx-menu',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent extends AppAbstract implements OnInit {
  @Input() typeMidia: TypeMidiaEnum = TypeMidiaEnum.MOVIE;

  protected listContinueWatching = [
    { name: "Vingadores Ultimato", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Capitão America 2 - Soldado Invernal", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'assets/images/cover_teste.jpg' }
  ];

  protected titleMidia!: string;

  ngOnInit(): void {
    this.getTitleMidia();
  }

  private getTitleMidia(): void {
    this.titleMidia = this._midiaService.getTypeMidiaEnum(this.typeMidia);
  }
}
