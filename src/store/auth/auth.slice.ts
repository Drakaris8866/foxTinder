import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItemFromStorage } from "../../utils/localStorage/localStorage";
import { login, logout, registration } from "./auth.actions";
import { IUser } from "../../shared/types/user.interface";
import { IAuthState } from "./auth.types";



const initialState: IAuthState = {
  isLoading: false,
  data: (getItemFromStorage("user") as IUser) || ({} as IUser),
  errors: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.user;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.data = {} as IUser;
        if (payload) {
          state.errors = payload.message;
        } else {
          state.errors = "Registration error";
        }
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.data = {} as IUser;
        if (payload) {
          state.errors = payload.message;
        } else {
          state.errors = "Registration error";
        }
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.data = {} as IUser;
      });
  },
});

export const {updateUser} = authSlice.actions;

export default authSlice.reducer;
