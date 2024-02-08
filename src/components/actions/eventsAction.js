import axios from 'axios'
export const retrieveAllEvents = () => async (dispatch) => {
    try {
        dispatch({
            type: "EVENTS_REQUEST_PENDING"
        })
        const response = await axios.get("http://localhost:8000/api/list")
        const allEvents = response.data
        if (allEvents.length > 0) {
            dispatch({
                type: "EVENTS_REQUEST_FULFILLED",
                payload: allEvents
            })
        } else {
            // dispatch error
            console.log("failed retrieval")
        }
    } catch (e) {
        console.error(e)
    }
}