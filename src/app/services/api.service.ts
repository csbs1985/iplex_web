import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from "rxjs";
import { MidiaInterface } from "../models/midia.interface";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected _errorService = inject(ErrorService);
    private _httpClient = inject(HttpClient);

    fetchChannelList(): Observable<MidiaInterface[]> {
        const username = 'Char2305';
        const password = '2304char';
        const urlAPi = `http://5ce.co/get.php?username=${username}&password=${password}&type=m3u_plus&output=ts`;

        return this._httpClient.get(urlAPi, { responseType: 'text' })
            .pipe(
                catchError(this._errorService.handleError)
            );
    }
}
