import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, catchError, tap } from "rxjs";
import { TypeMidiaEnum } from "../enums/type-midia.enum";
import { MidiaInterface } from "../models/midia.interface";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class MidiaService {
    protected _apiService = inject(ApiService);
    protected _router = inject(Router);

    listIptv: MidiaInterface[] = [];
    listChannels: MidiaInterface[] = [];
    listMovies: MidiaInterface[] = [];
    listSeries: MidiaInterface[] = [];

    channels$ = new Subject<MidiaInterface[]>();
    listAll$ = new Subject<MidiaInterface[]>();
    movies$ = new Subject<MidiaInterface[]>();
    series$ = new Subject<MidiaInterface[]>();

    fetchPlaylistData(): Observable<any> {
        return this._apiService.fetchChannelList().pipe(
            tap((list: any) => {
                this.listIptv = list;
                this.listAll$.next(this.listIptv);
                this.getAllMovies();
            }),
            catchError((error: any) => {
                console.error(error);
                throw error;
            })
        );
    }

    getAllMovies(): void {
        this.listMovies = this.listIptv.filter((item: MidiaInterface) => item.streamUrl.includes('movie'));
        this.movies$.next(this.listMovies);

        this.getAllSeries();
    }

    getAllSeries(): void {
        this.listSeries = this.listIptv.filter((item: MidiaInterface) => item.streamUrl.includes('series'));
        this.series$.next(this.listSeries);

        this.getAllChannels();
    }

    getAllChannels(): void {
        this.listChannels = this.listIptv.filter((item: MidiaInterface) => !item.streamUrl.includes('movie') && !item.streamUrl.includes('series'));
        this.channels$.next(this.listChannels);

        this._router.navigate(['/']);
    }

    getAllList() { }

    getTypeMidiaEnum(typeMidia: TypeMidiaEnum): string {
        if (typeMidia === TypeMidiaEnum.CHANNEL) return "CHANNEL";
        if (typeMidia === TypeMidiaEnum.CONTINUE_WACTHING) return "CONTINUE_WACTHING";
        if (typeMidia === TypeMidiaEnum.FAVORITE) return "FAVORITES";
        if (typeMidia === TypeMidiaEnum.MOVIE) return "MOVIES";
        return "SERIES";
    }

    isValidMidia(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    handleImageError(event: any): void {
        event.target.src = '';
    }
}
