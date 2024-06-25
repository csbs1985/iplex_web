import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ipx-loading',
  standalone: true,
  imports: [TranslateModule, NgIf],
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  @Input() loading: boolean = false;
  @Input() text: string = 'PROCESSING';
}
