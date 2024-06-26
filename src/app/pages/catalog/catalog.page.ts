import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAbstract } from '../../app.abstract';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './catalog.page.html'
})
export class CatalogPage extends AppAbstract implements OnInit {
  private typeMidia: TypeMidiaEnum = TypeMidiaEnum.CHANNEL;

  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.typeMidia = this._activatedRoute.snapshot.paramMap.get('type') as TypeMidiaEnum;
    console.log(this.typeMidia);
  }
}
