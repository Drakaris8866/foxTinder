import { createAsyncThunk } from "@reduxjs/toolkit";
import { IImageForDeleteInfo, IUpdatedUserRes, IUserInfo } from "./user.types";
import UserService from "../../services/User.service";
import { IUser } from "../../shared/types/user.interface";
import { updateUser } from "../auth/auth.slice";

export const updateUserInfo = createAsyncThunk<IUpdatedUserRes, IUserInfo>(
  "user/updateInfo",
  async ({ interests, about, gender, _id, images }: IUserInfo, thunkAPI) => {
    try {
      const response = await UserService.updateUserInfo({
        interests,
        about,
        gender,
        _id,
        images,
      });

      return response.data as IUpdatedUserRes;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getRandomImg = createAsyncThunk<
  { updatedUser: IUser },
  { _id: string }
>("user/getRandomImg", async ({ _id }, thunkAPI) => {
  try {
    const response = await UserService.getRandomImg({ _id });
    thunkAPI.dispatch(updateUser(response.data.updatedUser));
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const deleteImg = createAsyncThunk<IUpdatedUserRes, IImageForDeleteInfo>(
  "user/deleteImg",
  async ({ _id, imageId }, thunkAPI) => {
    try {
      const response = await UserService.deleteImg({ _id, imageId });
      thunkAPI.dispatch(updateUser(response.data.updatedUser));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

interface IUpdateUserDislikeInfo {
  usersId: string[];
  userId: string;
}

export const updateUserDislikeInfo = createAsyncThunk<
  IUpdatedUserRes,
  IUpdateUserDislikeInfo
>("user/updateUserDislikeInfo", async ({ usersId, userId }, thunkAPI) => {
  try {
    const response = await UserService.dislike(usersId, userId);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const updateUserLikeInfo = createAsyncThunk<
  IUpdatedUserRes,
  IUpdateUserDislikeInfo
>("user/updateUserLikeInfo", async ({ usersId, userId }, thunkAPI) => {
  try {
    const response = await UserService.like(usersId, userId);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
