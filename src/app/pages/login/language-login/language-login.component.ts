import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';

@Component({
  selector: 'ipx-language-login',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-login.component.html'
})
export class LanguageLoginComponent extends AppAbstract {
  @Output() languageLoginOutput = new EventEmitter<boolean>();

  protected closeLaguangeLogin(): void {
    this.languageLoginOutput.emit();
  }
}
