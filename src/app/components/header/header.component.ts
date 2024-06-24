import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ipx-header',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
