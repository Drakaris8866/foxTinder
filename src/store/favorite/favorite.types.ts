import { IUser } from "../../shared/types/user.interface";

export interface ICouple{
    _id: string,
    users: IUser[],
    roomId: string
}