import { configureStore } from "@reduxjs/toolkit";

import {
  userDashboardReducers,
  userFirebaseRegisterReducers,
  userLoginReducers,
  userRegisterReducers,
  userEventsReducers,
} from "../components/reducers/userReducer";
import { adminDashboardReducers, adminEventsReducers, eventAttendanceReducers, generateEventQrReducers, markEventAttendanceReducers } from "../components/reducers/adminReducer";
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
    eventAttendance: eventAttendanceReducers,
    markEventAttendance: markEventAttendanceReducers,
    generateEventQr: generateEventQrReducers,
  },
});
