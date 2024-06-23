import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  selector: 'ipx-menu-films',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './menu-films.component.html',
  styleUrl: './menu-films.component.scss'
})
export class MenuFilmsComponent extends AppAbstract implements OnInit {
  @Input() typeMidia: TypeMidiaEnum = TypeMidiaEnum.MOVIE;

  protected listContinueWatching = [
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' },
    { name: "Divertidamente", cover: 'assets/images/cover_teste.jpg' }
  ];

  protected titleMidia!: string;

  ngOnInit(): void {
    this.getTitleMidia();
  }
  
  private getTitleMidia(): void {
    this.titleMidia = this._typeMidiaService.getTypeMidiaEnum(this.typeMidia);
  }
}
