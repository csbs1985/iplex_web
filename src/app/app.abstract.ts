import { inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export abstract class AppAbstract {
    protected _translateService = inject(TranslateService);
}