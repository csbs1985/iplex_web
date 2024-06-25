import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'ipx-login.page',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, NgIf, LoadingComponent],
  templateUrl: './login.page.html',
})
export class LoginPage extends AppAbstract implements OnInit {
  protected formLogin!: FormGroup;

  protected loading: boolean = false;

  subject: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  protected onSubmit(): void {
    this.subject = true;

    if (this.formLogin.valid) {
      this.loading = true;

      console.log(this.formLogin.value);
    }
  }

  get f(): { [key: string]: any } {
    return this.formLogin.controls;
  }
}
