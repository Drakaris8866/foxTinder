import { IUser } from "../../shared/types/user.interface";

export interface IAuthResponse {
  user: IUser;
  token: string;
  message: string;
}

export interface IAuthError{
  message: string
}

export interface IAuthState {
  data: IUser,
  errors: null | string,
  isLoading: boolean
}


