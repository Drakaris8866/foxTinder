import { IPersonalization, IUser } from "../../shared/types/user.interface"

export type IUpdatedUserRes = {
  updatedUser: IUser
}

export type IUnamePassword = Pick<IUser, "username" | "password">

export type IUserInfo = IPersonalization & {_id: string}

export interface IImageForDeleteInfo {
  _id: string,
  imageId: string
}

export interface IUserState {
  isLoading: boolean,
  isFavoriteUserLoading: boolean,
  isImageLoading: boolean,
  errors: null | string
}