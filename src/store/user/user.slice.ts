import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  deleteImg,
  getRandomImg,
  updateUserDislikeInfo,
  updateUserInfo,
  updateUserLikeInfo,
} from "./user.actions";
import { getItemFromStorage } from "../../utils/localStorage/localStorage";
import { IUser } from "../../shared/types/user.interface";
import { IUserForCard } from "../users/users.types";
import { IUserState } from "./user.types";

const initialState: IUserState = {
  isLoading: false,
  isFavoriteUserLoading: false,
  isImageLoading: false,
  errors: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateUserInfo.rejected, (state, { payload }) => {
        state.errors = "Update user error";
        state.isLoading = false;
      })
      .addCase(getRandomImg.pending, (state) => {
        state.isImageLoading = true;
      })
      .addCase(getRandomImg.fulfilled, (state, { payload }) => {
        state.isImageLoading = false;
      })
      .addCase(getRandomImg.rejected, (state) => {
        state.isImageLoading = false;
      })
      .addCase(deleteImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImg.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateUserDislikeInfo.fulfilled, (state, { payload }) => {})
      .addCase(updateUserLikeInfo.fulfilled, (state, { payload }) => {});
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
