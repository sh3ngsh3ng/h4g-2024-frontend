import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducers, userRegisterReducers } from "../components/reducers/userReducer";

export const store = configureStore({
    reducer: {
        userLogin: userLoginReducers,
        userRegister: userRegisterReducers
    }
})