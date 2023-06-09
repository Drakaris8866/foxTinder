import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/User.service";
import { IUserForCard } from "./users.types";


export const getUsers = createAsyncThunk<IUserForCard[], { _id: string }>(
  "user/getUsers",
  async ({ _id }, thunkAPI) => {
    try {
      return await UserService.getUsers(_id).then((response) => response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

