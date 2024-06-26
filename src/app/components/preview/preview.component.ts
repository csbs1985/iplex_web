import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { MidiaInterface } from '../../models/midia.interface';

@Component({
  selector: 'ipx-preview',
  standalone: true,
  imports: [NgFor, NgIf, TranslateModule, RouterModule],
  templateUrl: './preview.component.html'
})
export class PreviewComponent extends AppAbstract implements OnInit {
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
}
