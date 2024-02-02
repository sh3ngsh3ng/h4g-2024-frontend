import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducers } from "../components/reducers/userReducer";

export const store = configureStore({
    reducer: {
        userLogin: userLoginReducers,
    }
})