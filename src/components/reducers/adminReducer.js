import {
    ADMIN_DASHBOARD_MODE_CREATE,
    ADMIN_DASHBOARD_MODE_READ,
    ADMIN_DASHBOARD_MODE_UPDATE
} from "../constants/admin"

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