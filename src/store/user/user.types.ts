export interface IAuthResponse {
  user: IUser;
  token: string;
  message: string;
}

export interface IUser {
  username: string;
  password: string;
  _id: string;
  personalization: IPersonalization;
}

export interface IPersonalization {
  images: string[];
  interests: [];
  about?: string;
  gender?: string;
}

export type IUpdatedUserRes = {
  updatedUser: IUser
}

export type IUnamePassword = Pick<IUser, "username" | "password">

export type IUserInfo = IPersonalization & {_id: string}

export interface IImageForDeleteInfo {
  _id: string,
  imageId: string
}