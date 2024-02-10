import axios from 'axios'
export const retrieveAllEvents = () => async (dispatch) => {
    try {
        dispatch({
            type: "EVENTS_REQUEST_PENDING"
        })
        const response = await axios.get("/api/list")
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

export const searchEvents = (searchInput) => async (dispatch) => {
    try {
        dispatch({
            type: "SEARCH_EVENT",
            payload: searchInput
        })
    } catch (e) {
        console.log(e)
    }
}