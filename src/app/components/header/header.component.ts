import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'ipx-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf],
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AppAbstract {
}
