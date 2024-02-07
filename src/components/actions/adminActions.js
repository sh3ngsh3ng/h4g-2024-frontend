export const changeAdminDashboard = (mode) => async (dispatch) => {
    try {
        dispatch({
            type: mode
        })
    } catch (e) {
        console.error(e)
    }
}

export const onEditingForm = (payload) => {
    console.log("onEditingForm: ", payload)
    try {
        return (
            {
                type: "ADMIN_EDIT_EVENT_FIELD",
                payload
            }
        )
    } catch (e) {
        console.error(e)
    }
}

export const setEditForm = (formToEdit) => {
    try {
        return {
            type: "ADMIN_EDIT_EVENT",
            formToEdit
        }
    } catch (e) {
        console.error(e)
    }
}