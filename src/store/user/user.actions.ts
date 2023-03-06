// @ts-ignore
import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/Auth.service";
import {IAuthResponse, IUnamePassword, IUser} from "./auth.types";

export const registration = createAsyncThunk<IAuthResponse, IUnamePassword>(
    "auth/registration",
    async ({username, password}, thunkAPI) => {
        try {
            const response = await AuthService.registration(username, password)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IUnamePassword>(
    "auth/login",
    async ({username, password}, thunkAPI) => {
        try {
            const response = await AuthService.login(username, password)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)
export const logout = createAsyncThunk(
    "auth/logout",
    async (thunkAPI) => await AuthService.logout()
)