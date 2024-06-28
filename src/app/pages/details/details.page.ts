import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAbstract } from '../../app.abstract';
import { MidiaInterface } from '../../models/midia.interface';
import { SeasonDetailsComponent } from './season-details/season-details.component';

@Component({
  standalone: true,
  imports: [RouterModule, SeasonDetailsComponent],
  templateUrl: './details.page.html'
})
export class DetailsPage extends AppAbstract implements OnInit {
  protected midiaId: string = '';
  protected midia!: MidiaInterface;

  protected listActhors = [
    {
      "name": "Robert Downey Jr.",
      "character": "Tony Stark / Iron Man",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Chris Evans",
      "character": "Steve Rogers / Captain America",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Mark Ruffalo",
      "character": "Bruce Banner / The Hulk",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Chris Hemsworth",
      "character": "Thor",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Scarlett Johansson",
      "character": "Natasha Romanoff / Black Widow",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Jeremy Renner",
      "character": "Clint Barton / Hawkeye",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Tom Hiddleston",
      "character": "Loki",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Clark Gregg",
      "character": "Agent Phil Coulson",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    },
    {
      "name": "Cobie Smulders",
      "character": "Agent Maria Hill",
      "photo_url": "https://static.tvtropes.org/pmwiki/pub/images/scarlett_johansson_5.jpg"
    }
  ]

  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.midiaId = this._activatedRoute.snapshot.paramMap.get('id') || '';
    this.midia = this._midiaService.getMidiaDetails(this.midiaId);
    this.midia = {
      "id": "",
      "name": "Furiosa Uma Saga Mad Max - 2024",
      "url": "https://5ce.co:443/movie/Char2305/2304char/250818.mp4\r",
      "logo": "https://5ce.co:443/images/j4KUED5qQCpmyz1Mr77coJCrndq_big.jpg",
      "group": ""
    }

    // this.getMidia(this.midiaId);
  }

  public getMidia(midiaId: string): void {
  }
}
