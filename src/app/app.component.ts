import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAbstract } from './app.abstract';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends AppAbstract {
  ngOnInit(): void {
    this._languageService.initLanguage();
  }
}
