import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from "rxjs";
import { LoginInterface } from "../models/login.interface";
import { MidiaInterface } from "../models/midia.interface";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected _errorService = inject(ErrorService);
    private _httpClient = inject(HttpClient);

    fetchChannelList(): Observable<MidiaInterface[]> {
        let login!: LoginInterface;

        if (typeof localStorage !== 'undefined') {
            login = JSON.parse(localStorage.getItem('login') || '') as LoginInterface;
        }

        const urlAPi = `http://5ce.co/get.php?username=${login.user}&password=${login.password}&type=m3u_plus&output=ts`;

        return this._httpClient.get(urlAPi, { responseType: 'text' })
            .pipe(
                catchError(this._errorService.handleError)
            );
    }
}
