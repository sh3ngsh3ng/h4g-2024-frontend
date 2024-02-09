import {
  EVENT_ATTENDANCE_FAIL,
  EVENT_ATTENDANCE_REQUEST,
  EVENT_ATTENDANCE_SUCCESS,

  MARK_EVENT_ATTENDANCE_FAIL,
  MARK_EVENT_ATTENDANCE_REQUEST,
  MARK_EVENT_ATTENDANCE_SUCCESS,

  GENERATE_EVENT_QR_FAIL,
  GENERATE_EVENT_QR_REQUEST,
  GENERATE_EVENT_QR_SUCCESS,
} from "../constants/admin";
import axios from "axios";

export const changeAdminDashboard = (mode) => async (dispatch) => {
  try {
    dispatch({
      type: mode,
    });
  } catch (e) {
    console.error(e);
  }
};

export const onEditingForm = (payload) => {
  try {
    return {
      type: "ADMIN_EDIT_EVENT_FIELD",
      payload,
    };
  } catch (e) {
    console.error(e);
  }
};

export const setEditForm = (formToEdit) => {
  try {
    return {
      type: "ADMIN_EDIT_EVENT",
      formToEdit,
    };
  } catch (e) {
    console.error(e);
  }
};

export const clearForm = () => {
  try {
    return {
      type: "CLEAR_FORM",
    };
  } catch (e) {
    console.error(e);
  }
};

export const listEventAttendance = ({ slug }) => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_ATTENDANCE_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.get(
      `/api/event/${slug}/listAttendance`,
      config
    );

    dispatch({
      type: EVENT_ATTENDANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EVENT_ATTENDANCE_FAIL,
      payload: error.response,
    });
  }
};

export const adminMarkAttendance = ({ slug, uid }) => async (dispatch) => {
  try {
    dispatch({
      type: MARK_EVENT_ATTENDANCE_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.post(
      `/api/event/${slug}/listAttendance/mark`,
      { uid },
      config
    );

    dispatch({
      type: MARK_EVENT_ATTENDANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MARK_EVENT_ATTENDANCE_FAIL,
      payload: error.response,
    });
  }
};

export const adminUnmarkAttendance = ({ slug, uid }) => async (dispatch) => {
  try {
    dispatch({
      type: MARK_EVENT_ATTENDANCE_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.post(
      `/api/event/${slug}/listAttendance/unmark`,
      { uid },
      config
    );

    dispatch({
      type: MARK_EVENT_ATTENDANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MARK_EVENT_ATTENDANCE_FAIL,
      payload: error.response,
    });
  }
};

export const adminGenerateQr = ({ slug }) => async (dispatch) => {
  try {
    dispatch({
      type: GENERATE_EVENT_QR_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.get(
      `/api/event/${slug}/listAttendance/generate`,
      config
    );

    dispatch({
      type: GENERATE_EVENT_QR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GENERATE_EVENT_QR_FAIL,
      payload: error.response,
    });
  }
};

export const adminCreateEvent = (newEvent) => async (dispatch) => {
  try {
    dispatch({
      type: "CREATE_NEW_EVENT"
    })

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.post("http://localhost:8000/api/create", newEvent, config)
    dispatch({
      type: "NEW_EVENT_CREATED",
      payload: data["event"]
    })

  } catch (e) {
    console.error(e)
  }
}


export const adminUpdateEvent = (newEvent) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_EVENT"
    })

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@user"),
      },
    };

    const { data } = await axios.put(`http://localhost:8000/api/update/${newEvent.formToEdit.slug}`, newEvent, config)

    dispatch({
      type: "EVENT_UPDATED",
      payload: data["event"]
    })

  } catch (e) {
    console.error(e)
  }
}

export const adminAddImage = (imageContent) => {
  return {
    type: "ADD_IMAGE_EVENT",
    payload: imageContent
  }
}
