import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { PreviewComponent } from '../../components/preview/preview.component';
import { TypeMidiaEnum } from '../../enums/type-midia.enum';
import { MidiaInterface } from '../../models/midia.interface';

@Component({
  selector: 'ipx-search.page',
  standalone: true,
  imports: [KeyboardComponent, TranslateModule, NgIf, NgFor, PreviewComponent],
  templateUrl: './search.page.html'
})
export class SearchPage extends AppAbstract implements OnInit {
  typeMidiaEnum: typeof TypeMidiaEnum = TypeMidiaEnum;

  protected searchText: string = "";

  protected listSearchHistoric: string[] = [];

  protected listMidia: MidiaInterface[] = [];

  ngOnInit(): void {
    this.getSearchHistoric();
  }

  protected getSearchHistoric(): void {
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.listSearchHistoric = login.users[2].search;
    }
  }

  protected keyboardOutput(event: string): void {
    this.searchText = event;
    this.filterMidiaPerName();
  }

  protected selectHistoric(historic: string): void {
    this.searchText = historic;
    this.filterMidiaPerName();
  }

  protected filterMidiaPerName(): void {
    if (this.searchText.length > 2) {
      this.listMidia = this._midiaService.filterMidiaPerName(this.searchText);
    }
  }

  protected midiaSelectOutput(event: string): void{
    if (typeof localStorage !== 'undefined') {
      // const login = JSON.stringify(localStorage.setItem('login'));
    }
  }
}
