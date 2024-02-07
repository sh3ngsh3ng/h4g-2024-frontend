export const eventsReducers = (state = { allEvents: [] }, action) => {
    switch (action.type) {
        case "EVENTS_REQUEST_PENDING":
            return { loading: true }
        case "EVENTS_REQUEST_FULFILLED":
            return { loading: false, allEvents: action.payload }
        case "EVENTS_REQUEST_FAILED":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}