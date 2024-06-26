import { MidiaInterface } from "./midia.interface";

export interface UserInterface {
    name?: string;
    avatar?: string;
    favorites?: MidiaInterface[],
    history?: MidiaInterface[],
}