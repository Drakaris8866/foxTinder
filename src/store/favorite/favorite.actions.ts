import { createAsyncThunk } from "@reduxjs/toolkit";
import FavoriteService from "../../services/Favorite.service";
import { ICouple } from "./favorite.types";

export const getFavoriteUsers = createAsyncThunk<ICouple[], string>(
  "favorite/getFavoriteUsers",
  async (userId: string, thunkAPI) => {
    try {
      return (
        await FavoriteService.getUserCouples(userId).then(
          (response) => response.data.userCouples
        )
      ).map((couple) => {
        couple.users.splice(
          couple.users.findIndex((user) => user._id === userId),
          1
        );

        return couple;
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
