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
  @Input() title!: string;
  @Input() text: string = 'PROCESSING';
}
