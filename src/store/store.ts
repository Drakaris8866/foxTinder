import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const store = configureStore({
    reducer : {
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default store