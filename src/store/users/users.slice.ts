import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../../shared/types/state.interface";
import { IUserForCard } from "./users.types";
import { getUsers } from "./users.actions";

const initialState: State<IUserForCard[]> = {
  data: null,
  isLoading: false,
  errors: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.errors = "Get users error";
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
