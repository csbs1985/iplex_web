import { UserInterface } from "./user.interface";

export interface LoginInterface {
    user: string;
    password: string;
    users: UserInterface[]
}
