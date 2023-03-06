import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, logout, registration} from "./auth.actions";
import {IUser} from "./auth.types";
import {getItemFromStorage} from "../../utils/localStorage/localStorage";

const initialState = {
    user: getItemFromStorage("user") as IUser || {} as IUser,
    isLoading: false
}

export const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registration.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(registration.rejected, (state) => {
                state.isLoading = false
                state.user = {} as IUser
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
                state.user = {} as IUser
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = {} as IUser
            })
    },
})

export default authReducer.reducer