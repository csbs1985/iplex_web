import { Injectable } from "@angular/core";
import { TypeMidiaEnum } from "../enums/type-midia.enum";

@Injectable({
    providedIn: 'root'
})
export class MidiaService {

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
