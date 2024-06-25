import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _httpClient = inject(HttpClient);

    fetchChannelList(): Observable<Channel[]> {
        const username = 'Sab2305';
        const password = 'Bina2305';
        const urlAPi = `http://5ce.co/get.php?username=${username}&password=${password}&type=m3u_plus&output=ts`;

        return this._httpClient.get(urlAPi, { responseType: 'text' })
            .pipe(
                catchError(error => {
                    console.error('Error fetching channel list:', error);
                    if (error instanceof HttpErrorResponse) {
                        console.error('HTTP Error:', error.status, error.statusText);
                    } else {
                        console.error('Unknown Error:', error);
                    }
                    return of([]);
                }),
                map(response => this.parsePlaylist(response))
            );
    }

    private parsePlaylist(playlist: any): Channel[] {
        const channels: Channel[] = [];

        const lines = playlist.split('\n');

        let channelName = '';
        let logoUrl = '';
        let streamUrl = '';

        for (const line of lines) {
            if (line.startsWith('#EXTINF:')) {
                channelName = line.substring(line.indexOf('tvg-id="') + 8, line.indexOf('"', line.indexOf('tvg-id="') + 8));
                logoUrl = line.substring(line.indexOf('tvg-logo="') + 10, line.indexOf('"', line.indexOf('tvg-logo="') + 10));
            } else if (line.startsWith('http')) {
                streamUrl = line;
                const channel = { channelName, streamUrl, logoUrl };
                channels.push(channel);
            }
        }

        return channels;
    }
}

export interface Channel {
    name?: string;
    logoUrl?: string;
    streamUrl?: string;
    channelUrl?: string;
}