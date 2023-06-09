import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../shared/types/state.interface";
import { ICouple } from "./favorite.types";
import { getFavoriteUsers } from "./favorite.actions";

const initialState: State<ICouple[]> = {
  isLoading: false,
  data: null,
  errors: null,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoriteUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = [...payload]
      })
      .addCase(getFavoriteUsers.rejected, (state) => {
        state.isLoading = false;
        state.errors = "Get favorite users error"
      });
  },
});

export const {} = favoriteSlice.actions;

export default favoriteSlice.reducer;
