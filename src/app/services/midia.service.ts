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
                this.listIptv = this.parsePlaylist(list);
                this.listAll$.next(this.listIptv);
                this.getAllMovies();
            }),
            catchError((error: any) => {
                console.error(error);
                throw error;
            })
        );
    }

    parsePlaylist(playlist: any): MidiaInterface[] {
        const channels: MidiaInterface[] = [];
        const lines = playlist.split('\n');
        let channel = {};

        for (const line of lines) {
            if (line.startsWith('#EXTINF:')) {
                const result = this.extractValues(line);
                channel = {
                    id: result['id'] || "",
                    name: result['name'] || "",
                    url: result['logo'] || "",
                    logo: result['logo'] || "",
                    group: result['group-title'] || ""
                }
            } else if (line.startsWith('http')) {
                channel = { ...channel, url: line };
                channels.push(channel as MidiaInterface);
            }
        }

        return channels;
    }

    extractValues(str: string): { [key: string]: string } {
        const regex = /tvg-(id|name|logo|group-title)="([^"]+)"/g;
        const result: { [key: string]: string } = {};
        let match;

        while ((match = regex.exec(str)) !== null) {
            result[match[1] as string] = match[2];
        }

        return result;
    }

    getAllMovies(): void {
        this.listMovies = this.listIptv.filter((item: MidiaInterface) => item.url.includes('movie'));
        this.movies$.next(this.listMovies);

        this.getAllSeries();
    }

    getAllSeries(): void {
        this.listSeries = this.listIptv.filter((item: MidiaInterface) => item.url.includes('series'));
        this.series$.next(this.listSeries);

        this.getAllChannels();
    }

    getAllChannels(): void {
        this.listChannels = this.listIptv.filter((item: MidiaInterface) => !item.url.includes('movie') && !item.url.includes('series'));
        this.channels$.next(this.listChannels);

        this._router.navigate(['/']);
    }

    getTypeMidiaEnum(typeMidia: TypeMidiaEnum): string {
        if (typeMidia === TypeMidiaEnum.CHANNEL) return "CHANNEL";
        if (typeMidia === TypeMidiaEnum.CONTINUE_WATCHING) return "CONTINUE_WATCHING";
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

    getMidiaDetails(midiaId: string): MidiaInterface {
        const midia = this.listIptv.filter((midia: MidiaInterface) => midia.url === midiaId);
        return midia[0] as MidiaInterface;
    }

    filterMidiaPerName(name: string): MidiaInterface[] {
        return this.listIptv.filter((item: MidiaInterface) => item.name?.includes(name)) as MidiaInterface[];
    }
}
