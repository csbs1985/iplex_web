import { Component } from '@angular/core';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';

@Component({
  selector: 'ipx-search.page',
  standalone: true,
  imports: [KeyboardComponent],
  templateUrl: './search.page.html'
})
export class SearchPage {
  protected searchText: string = "Charles";

  protected keyboardOutput(event: string): void {
    console.log(event);
  }
}
