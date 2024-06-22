import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LaguangeEnum } from "../enums/language.enum";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    protected _translateService = inject(TranslateService);

    initLanguage(): void {
        const defaultLange = (localStorage.getItem('language') as LaguangeEnum || LaguangeEnum.ENGLISH);
        this.setLanguage(defaultLange);
    }

    changeLanguage(lang: LaguangeEnum): void {
        localStorage.setItem('language', lang);
        this.setLanguage(lang);
    }

    setLanguage(lang: LaguangeEnum): void {
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
}
