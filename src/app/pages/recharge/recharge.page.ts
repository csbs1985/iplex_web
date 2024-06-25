import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'ipx-recharge.page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './recharge.page.html'
})
export class RechargePage extends AppAbstract implements OnInit {
  ngOnInit(): void {
    this._midiaService.fetchPlaylistData();
  }
}
