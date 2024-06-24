import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  selector: 'ipx-menu-films',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './menu-films.component.html',
  styleUrl: './menu-films.component.scss'
})
export class MenuFilmsComponent extends AppAbstract implements OnInit {
  @Input() typeMidia: TypeMidiaEnum = TypeMidiaEnum.MOVIE;

  protected listContinueWatching = [
    { name: "Vingadores Ultimato", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/205/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Capitão America 2 - Soldado Invernal", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' },
    { name: "Divertidamente", rate: "7.3", time: '2h18m', cover: 'https://www.ocamundongo.com.br/wp-content/uploads/2015/10/divertida-mente-poster-todos-camundongo.jpg' }
  ];

  protected titleMidia!: string;

  ngOnInit(): void {
    this.getTitleMidia();
  }

  private getTitleMidia(): void {
    this.titleMidia = this._midiaService.getTypeMidiaEnum(this.typeMidia);
  }
}
