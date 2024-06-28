import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'ipx-keyboard',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent extends AppAbstract implements OnInit {
  @Input() keyboardInput: string = '';
  @Output() keyboardOutput = new EventEmitter<string>();

  protected listKeys: string[] = [];

  ngOnInit(): void {
    this.generateKeys();
  }

  protected generateKeys(): void {
    this.listKeys = [...Array(26).keys()].map(x => String.fromCharCode(x + 65))
      .concat([...Array(10).keys()].map(x => String.fromCharCode(x + 48)));
  }

  protected selectKey(key: string): void {
    this.keyboardInput = this.keyboardInput.concat(key);
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectSpace(): void {
    this.keyboardInput = this.keyboardInput.concat(" ");
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectBackspace(): void {
    this.keyboardInput = this.keyboardInput.slice(0, -1);
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectClean(): void {
    this.keyboardInput = "";
    this.keyboardOutput.emit(this.keyboardInput);
  }
}
