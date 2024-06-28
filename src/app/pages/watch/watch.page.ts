import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAbstract } from '../../app.abstract';
import { MidiaInterface } from '../../models/midia.interface';

@Component({
  selector: 'ipx-watch.pages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './watch.page.html'
})
export class WatchPage extends AppAbstract implements OnInit {
  protected midiaId: string = '';
  protected midia!: MidiaInterface;

  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.midiaId = this._activatedRoute.snapshot.paramMap.get('id') || '';
    this.midia = this._midiaService.getMidiaDetails(this.midiaId);
    console.log(this.midia);
  }
}
