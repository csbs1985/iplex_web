import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppAbstract } from './app.abstract';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends AppAbstract implements CanActivate {
  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}