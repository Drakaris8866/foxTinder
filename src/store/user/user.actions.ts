import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/Auth.service";
import {
  IAuthResponse,
  IImageForDeleteInfo,
  IUnamePassword,
  IUpdatedUserRes,
  IUser,
  IUserInfo,
} from "./user.types";
import UserService from "../../services/User.service";
import {IUserForCard} from "../../components/ui/userCard/UserCard";

export const registration = createAsyncThunk<IAuthResponse, IUnamePassword>(
  "user/registration",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.registration(username, password);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, IUnamePassword>(
  "user/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const logout = createAsyncThunk(
  "user/logout",
  async (thunkAPI) => await AuthService.logout()
);

export const updateUserInfo = createAsyncThunk<IUpdatedUserRes, IUserInfo>(
  "user/updateInfo",
  async ({ interests, about, gender, _id, images}: IUserInfo, thunkAPI) => {
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
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getUsers();
      return response.data as IUserForCard[];
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
