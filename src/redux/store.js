import { configureStore } from "@reduxjs/toolkit";
import {
  userDashboardReducers,
  userFirebaseRegisterReducers,
  userLoginReducers,
  userRegisterReducers,
  userEventsReducers,
} from "../components/reducers/userReducer";
import { adminDashboardReducers, adminEventsReducers } from "../components/reducers/adminReducer";
import { eventsReducers } from "../components/reducers/eventsReducer";

export const store = configureStore({
  reducer: {
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userFirebaseRegister: userFirebaseRegisterReducers,
    adminDashboard: adminDashboardReducers,
    userDashboard: userDashboardReducers,
    userEvents: userEventsReducers,
    adminEvents: adminEventsReducers,
    events: eventsReducers,
  },
});
