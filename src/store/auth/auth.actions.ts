import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUnamePassword } from "../user/user.types";
import AuthService from "../../services/Auth.service";
import { IAuthError, IAuthResponse } from "./auth.types";
import { AxiosError } from "axios";

export const registration = createAsyncThunk<IAuthResponse, IUnamePassword, {rejectValue: IAuthError}>(
  "auth/registration",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.registration(username, password);
      return response.data;
    } catch (e) {
      const error: AxiosError<IAuthError> = e as any;
      if (!error.response) {
        throw e;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, IUnamePassword, {rejectValue: IAuthError}>(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);
      return response.data;
    } catch (e) {
      const error: AxiosError<IAuthError> = e as any;
      if (!error.response) {
        throw e;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (thunkAPI) => await AuthService.logout()
);
