import {
    ADMIN_DASHBOARD_MODE_CREATE,
    ADMIN_DASHBOARD_MODE_READ,
    ADMIN_DASHBOARD_MODE_UPDATE
} from "../constants/admin"

let initialForm = {
    name: "",
    organization: "",
    skills: [],
    month: "",
    day: "",
    description: ""
}

export const adminDashboardReducers = (state = { mode: ADMIN_DASHBOARD_MODE_READ }, action) => {
    switch (action.type) {

        case ADMIN_DASHBOARD_MODE_READ:
            return { mode: action.type }

        case ADMIN_DASHBOARD_MODE_UPDATE:
            return { mode: action.type }

        case ADMIN_DASHBOARD_MODE_CREATE:
            return { mode: action.type }

        default:
            return state
    }
}

export const adminEventsReducers = (state = { formToEdit: initialForm }, action) => {
    switch (action.type) {
        case "ADMIN_EDIT_EVENT_FIELD":
            const { field, value } = action.payload
            const editedForm = {
                ...state.formToEdit,
                [field]: value
            }
            return {
                ...state,
                formToEdit: editedForm
            }
        case "ADMIN_EDIT_EVENT":
            return { ...state, formToEdit: { ...action.formToEdit } }
        default:
            return state
    }
}