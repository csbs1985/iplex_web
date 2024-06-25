import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { MidiaInterface } from '../../models/midia.interface';

@Component({
  selector: 'ipx-last-midia',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule],
  templateUrl: './last-midia.component.html'
})
export class LastMidiaComponent extends AppAbstract implements OnInit {
  @Input() midia: MidiaInterface[] = [];
  @Input() typeMidia: TypeMidiaEnum = TypeMidiaEnum.MOVIE;

  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  protected titleMidia!: string;

  ngOnInit(): void {
    this.getTitleMidia();
  }

  private getTitleMidia(): void {
    this.titleMidia = this._midiaService.getTypeMidiaEnum(this.typeMidia);
  }

  protected showAll(): void { }

  protected selectMidia(midia: MidiaInterface): void {
    console.log(midia);
  }
}
