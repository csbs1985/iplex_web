import { inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "./services/api.service";
import { LanguageService } from "./services/language.service";
import { MidiaService } from "./services/midia.service";

export abstract class AppAbstract {
    protected _apiService = inject(ApiService);
    protected _languageService = inject(LanguageService);
    protected _midiaService = inject(MidiaService);
    protected _translateService = inject(TranslateService);

    protected _formBuilder = inject(FormBuilder);

    protected _router = inject(Router);
}