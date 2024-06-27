import { MenuSettingsEnum } from "../enums/menu-settings.enum";

export interface MenuSettingsInterface {
    icon: string,
    text: MenuSettingsEnum,
    route: string
}