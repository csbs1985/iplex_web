import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LaguangeEnum } from "../enums/language.enum";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    protected _translateService = inject(TranslateService);

    initLanguage(): void {
        const defaultLange = localStorage.getItem('language');
        // let lang = LaguangeEnum.ENGLISH;

        if (defaultLange !== null) {
            let lang = defaultLange;
        } else {}

        // this.setLanguage(lang);
    }

    setLanguage(lang: LaguangeEnum): void {
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);

        const defaultLange = localStorage.getItem('language');

        if (defaultLange !== null) {
            localStorage.setItem('language', JSON.stringify(lang));
        } else {
            localStorage.setItem('language', JSON.stringify(LaguangeEnum.ENGLISH));
        }
    }
}
