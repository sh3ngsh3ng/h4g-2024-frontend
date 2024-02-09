import {
  ADMIN_DASHBOARD_MODE_CREATE,
  ADMIN_DASHBOARD_MODE_READ,
  ADMIN_DASHBOARD_MODE_UPDATE,
  EVENT_ATTENDANCE_FAIL,
  EVENT_ATTENDANCE_REQUEST,
  EVENT_ATTENDANCE_RESET,
  EVENT_ATTENDANCE_SUCCESS,
  EVENT_FORM_TEMPLATE,
  MARK_EVENT_ATTENDANCE_REQUEST,
  MARK_EVENT_ATTENDANCE_FAIL,
  MARK_EVENT_ATTENDANCE_SUCCESS,
  MARK_EVENT_ATTENDANCE_RESET,
  GENERATE_EVENT_QR_REQUEST,
  GENERATE_EVENT_QR_FAIL,
  GENERATE_EVENT_QR_SUCCESS,
  GENERATE_EVENT_QR_RESET,
  EVENT_COMPLETE_REQUEST,
  EVENT_COMPLETE_FAIL,
  EVENT_COMPLETE_SUCCESS,
  EVENT_COMPLETE_RESET,
} from "../constants/admin";

// const initialForm = {
//     name: "",
//     organization: "",
//     skills: [],
//     month: "",
//     day: "",
//     description: ""
// }

export const adminDashboardReducers = (
  state = { mode: ADMIN_DASHBOARD_MODE_READ },
  action
) => {
  switch (action.type) {
    case ADMIN_DASHBOARD_MODE_READ:
      return { mode: action.type };

    case ADMIN_DASHBOARD_MODE_UPDATE:
      return { mode: action.type };

    case ADMIN_DASHBOARD_MODE_CREATE:
      return { mode: action.type };

    default:
      return state;
  }
};

export const adminEventsReducers = (
  state = { formToEdit: EVENT_FORM_TEMPLATE },
  action
) => {
  switch (action.type) {
    case "ADMIN_EDIT_EVENT_FIELD":
      const { field, value } = action.payload;
      const editedForm = {
        ...state.formToEdit,
        [field]: value,
      };
      return {
        ...state,
        formToEdit: editedForm,
      };
    case "ADMIN_EDIT_EVENT":
      return { ...state, formToEdit: { ...action.formToEdit } };
    case "CLEAR_FORM":
      return { ...state, formToEdit: { ...EVENT_FORM_TEMPLATE } };
    default:
      return state;
  }
};

export const eventAttendanceReducers = (state = {}, action) => {
  switch (action.type) {
    case EVENT_ATTENDANCE_REQUEST:
      return { loading: true };

    case EVENT_ATTENDANCE_SUCCESS:
      return {
        loading: false,
        data: action.payload.attendance,
        slug: action.payload.slug,
        eventName: action.payload.eventName,
      };

    case EVENT_ATTENDANCE_FAIL:
      return { loading: false, error: action.payload };

    case EVENT_ATTENDANCE_RESET:
      return {};

    default:
      return state;
  }
};

export const markEventAttendanceReducers = (state = {}, action) => {
  switch (action.type) {
    case MARK_EVENT_ATTENDANCE_REQUEST:
      return { loading: true };

    case MARK_EVENT_ATTENDANCE_SUCCESS:
      return { loading: false, success: action.payload };

    case MARK_EVENT_ATTENDANCE_FAIL:
      return { loading: false, error: action.payload };

    case MARK_EVENT_ATTENDANCE_RESET:
      return {};

    default:
      return state;
  }
};

export const generateEventQrReducers = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_EVENT_QR_REQUEST:
      return { loading: true };

    case GENERATE_EVENT_QR_SUCCESS:
      return { loading: false, qr: action.payload };

    case GENERATE_EVENT_QR_FAIL:
      return { loading: false, error: action.payload };

    case GENERATE_EVENT_QR_RESET:
      return {};

    default:
      return state;
  }
};

export const completeEventReducers = (state = {}, action) => {
    switch (action.type) {
      case EVENT_COMPLETE_REQUEST:
        return { loading: true };
  
      case EVENT_COMPLETE_SUCCESS:
        return { loading: false, success: true };
  
      case EVENT_COMPLETE_FAIL:
        return { loading: false, error: action.payload.data };
  
      case EVENT_COMPLETE_RESET:
        return {};
  
      default:
        return state;
    }
  };