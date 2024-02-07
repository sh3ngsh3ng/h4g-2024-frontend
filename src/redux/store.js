import { configureStore } from "@reduxjs/toolkit";
import { userFirebaseRegisterReducers, userLoginReducers, userRegisterReducers } from "../components/reducers/userReducer";
import { adminDashboardReducers, adminEventsReducers } from "../components/reducers/adminReducer";
import { eventsReducers } from "../components/reducers/eventsReducer";

export const store = configureStore({
    reducer: {
        userLogin: userLoginReducers,
        userRegister: userRegisterReducers,
        userFirebaseRegister: userFirebaseRegisterReducers,
        adminDashboard: adminDashboardReducers,
        adminEvents: adminEventsReducers,
        events: eventsReducers
    }
})