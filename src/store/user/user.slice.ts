import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteImg,
  getRandomImg,
  getUsers,
  login,
  logout,
  registration,
  updateUserInfo,
} from "./user.actions";
import { IUser } from "./user.types";
import { getItemFromStorage } from "../../utils/localStorage/localStorage";
import { IUserForCard } from "../../components/ui/userCard/UserCard";

const initialState = {
  user: (getItemFromStorage("user") as IUser) || ({} as IUser),
  users: [] as IUserForCard[],
  isLoading: false,
  isImageLoading: false,
};

export const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(registration.rejected, (state) => {
        state.isLoading = false;
        state.user = {} as IUser;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = {} as IUser;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {} as IUser;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload.updatedUser;
      })
      .addCase(getRandomImg.pending, (state, { payload }) => {
        state.isImageLoading = true;
      })
      .addCase(getRandomImg.fulfilled, (state, { payload }) => {
        state.user = payload.updatedUser;
        state.isImageLoading = false;
      })
      .addCase(deleteImg.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteImg.fulfilled, (state, { payload }) => {
        state.user = payload.updatedUser;
        state.isLoading = false;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        payload.splice(
          payload.findIndex((el) => el.username === state.user.username),
          1
        );
        state.users = payload;
      });
  },
});

export default authReducer.reducer;
