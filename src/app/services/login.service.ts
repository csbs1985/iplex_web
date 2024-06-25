import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    protected _router = inject(Router);

    logout(): void {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('login');
            this._router.navigate(['/login']);
        }
    }
}