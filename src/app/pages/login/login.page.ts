import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LoginInterface } from '../../models/login.interface';

@Component({
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, NgIf, LoadingComponent],
  templateUrl: './login.page.html',
})
export class LoginPage extends AppAbstract implements OnInit {
  protected formLogin!: FormGroup;

  protected loading: boolean = false;

  protected errorUser: boolean = false;
  protected errorPasswrod: boolean = false;

  private login!: LoginInterface;

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
      try {
        this.userValidator();
      } catch (error) {

      }
    }
  }

  private userValidator(): void {
    this.loading = true;
    this.errorUser = this.errorPasswrod = false;

    const user = this.formLogin.value.user;
    const password = this.formLogin.value.password;

    if (user !== 'csbs') {
      this.errorUser = true;
    } else if (password !== "1234") {
      this.errorPasswrod = true;
    } else {
      this.userSave();
    };

    this.loading = false;
  }

  private userSave(): void {
    this.login = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
      users: [
        {
          name: this.formLogin.value.user,
          avatar: ''
        }
      ]
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('login', JSON.stringify(this.login));
    }

    this._router.navigate(['/users']);
  }

  get f(): { [key: string]: any } {
    return this.formLogin.controls;
  }
}
