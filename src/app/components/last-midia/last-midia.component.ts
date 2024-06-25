import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { PlaylistItem } from '../../models/playlist.interface';

@Component({
  selector: 'ipx-last-midia',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './last-midia.component.html'
})
export class LastMidiaComponent extends AppAbstract implements OnInit {
  @Input() midia: PlaylistItem[] = [];
  @Input() typeMidia: TypeMidiaEnum = TypeMidiaEnum.MOVIE;

  protected titleMidia!: string;

  ngOnInit(): void {
    this.getTitleMidia();
  }

  private getTitleMidia(): void {
    this.titleMidia = this._midiaService.getTypeMidiaEnum(this.typeMidia);
  }
}
