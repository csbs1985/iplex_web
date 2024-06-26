import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAbstract } from '../../app.abstract';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.page.html'
})
export class DetailsPage extends AppAbstract implements OnInit {
  private midiaId: string | null = '';

  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.midiaId = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.midiaId);
  }
}
