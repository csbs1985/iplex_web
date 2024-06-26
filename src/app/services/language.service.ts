import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageEnum } from "../enums/language.enum";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    protected _translateService = inject(TranslateService);

    initLanguage(): void {
        let lang = LanguageEnum.ENGLISH;

        if (typeof localStorage !== 'undefined') {
            const defaultLange = localStorage.getItem('language');

            if (defaultLange !== null) lang = JSON.parse(defaultLange);
        }
        this.setLanguage(lang);
    }

    setLanguage(lang: LanguageEnum): void {
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('language', JSON.stringify(lang));
        }
    }
}