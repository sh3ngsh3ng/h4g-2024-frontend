export const changeAdminDashboard = (mode) => async (dispatch) => {
    try {
        dispatch({
            type: mode
        })
    } catch (e) {
        console.error(e)
    }
}