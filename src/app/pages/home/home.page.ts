import { Component } from '@angular/core';
import { MenuFilmsComponent } from '../../components/menu-films/menu-films.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';

@Component({
  selector: 'ipx-home.page',
  standalone: true,
  imports: [MenuFilmsComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;
}
