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
  protected isErrorFetch: boolean = false;

  ngOnInit(): void {
    this.fetchPlaylistData();
  }

  protected fetchPlaylistData(): void {
    this.isErrorFetch = false;
    
    this._midiaService.fetchPlaylistData()
      .subscribe(
        (result: any) => { },
        (error: any) => {
          console.error(error);
          this.isErrorFetch = true;
        }
      );
  }
}
