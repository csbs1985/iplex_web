import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from './app.abstract';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends AppAbstract {
  ngOnInit(): void {
    const defaultLange = localStorage.getItem('language') || 'en';

    this._translateService.setDefaultLang(defaultLange);
    this._translateService.use(defaultLange);
  }
}
