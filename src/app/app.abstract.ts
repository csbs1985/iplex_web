import { inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./services/language.service";
import { TypeMidiaService } from "./services/type-midia.service";

export abstract class AppAbstract {
    protected _languageService = inject(LanguageService);
    protected _translateService = inject(TranslateService);
    protected _typeMidiaService = inject(TypeMidiaService);
}