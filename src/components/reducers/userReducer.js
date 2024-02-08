import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_FIREBASE_REGISTER_REQUEST,
  USER_FIREBASE_REGISTER_SUCCESS,
  USER_FIREBASE_REGISTER_FAIL,
} from "../constants/user";

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    // case LOGOUT:
    //   return { };

    default:
      return state;
  }
};

export const userRegisterReducers = (state = { loading: false }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };
    // return {};

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    // case LOGOUT:
    //   return { };

    default:
      return state;
  }
};

export const userFirebaseRegisterReducers = (state = { loading: false }, action) => {
  switch (action.type) {
    case USER_FIREBASE_REGISTER_REQUEST:
      return { loading: true };

    case USER_FIREBASE_REGISTER_SUCCESS:
      return { loading: false, uid: action.payload.uid, email: action.payload.email, success: true };
    // return {};

    case USER_FIREBASE_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    // case LOGOUT:
    //   return { };

    default:
      return state;
  }
};

export const userDashboardReducers = (state = { mode: "USER_DASHBOARD_READ_CURRENT" }, action) => {
  switch (action.type) {

    case "USER_DASHBOARD_READ_CURRENT":
      return { mode: action.type }

    case "USER_DASHBOARD_READ_PAST":
      return { mode: action.type }

    case "USER_DASHBOARD_READ_DETAILS":
      return { mode: action.type }

    default:
      return state
  }
}