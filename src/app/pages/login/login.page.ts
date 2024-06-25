import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'ipx-login.page',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.page.html',
})
export class LoginPage extends AppAbstract implements OnInit {

  protected formLogin!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this._formBuilder.group({
      user: [],
      password: []
    })
  }

  onSubmit() {
    console.log(this.formLogin.value);
  }
}
