import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageEnum } from "../enums/language.enum";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    protected _translateService = inject(TranslateService);

    languageSelected = LanguageEnum.ENGLISH;

    listLanguage = [
        {
            language: 'English',
            code: LanguageEnum.ENGLISH,
            icon: 'assets/icon/en.svg'
        },
        {
            language: 'Español',
            code: LanguageEnum.SPANISH,
            icon: 'assets/icon/es.svg'
        },
        {
            language: 'Deutsch',
            code: LanguageEnum.GERMAN,
            icon: 'assets/icon/de.svg'
        },
        {
            language: 'Français',
            code: LanguageEnum.FRANCE,
            icon: 'assets/icon/fr.svg'
        },
        {
            language: 'Italiano',
            code: LanguageEnum.ITALIAN,
            icon: 'assets/icon/it.svg'
        },
        {
            language: 'Português',
            code: LanguageEnum.PORTUGUESE,
            icon: 'assets/icon/br.svg'
        }
    ];

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

    selectLanguage(lang: LanguageEnum): void {
        this.languageSelected = lang;
        this.setLanguage(lang);
    }
}