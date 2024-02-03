import { configureStore } from "@reduxjs/toolkit";
import { userFirebaseRegisterReducers, userLoginReducers, userRegisterReducers } from "../components/reducers/userReducer";

export const store = configureStore({
    reducer: {
        userLogin: userLoginReducers,
        userRegister: userRegisterReducers,
        userFirebaseRegister: userFirebaseRegisterReducers
    }
})