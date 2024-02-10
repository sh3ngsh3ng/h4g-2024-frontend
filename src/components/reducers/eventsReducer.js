export const eventsReducers = (state = { allEvents: [], oldEvents: [] }, action) => {
    switch (action.type) {
        case "EVENTS_REQUEST_PENDING":
            return { loading: true }
        case "EVENTS_REQUEST_FULFILLED":
            return { loading: false, allEvents: action.payload }
        case "EVENTS_REQUEST_FAILED":
            return { loading: false, error: action.payload }
        case "CREATE_NEW_EVENT":
            return { ...state, loading: true }
        case "NEW_EVENT_CREATED":
            return { loading: false, allEvents: [...state.allEvents, action.payload] }
        case "UPDATE_EVENT":
            return { ...state, loading: true }
        case "EVENT_UPDATED":
            const updatedEventIndex = state.allEvents?.findIndex(e => e._id === action.payload._id)
            if (updatedEventIndex !== -1) {
                const updateAllEvents = [...state.allEvents]
                updateAllEvents[updatedEventIndex] = action.payload
                return { loading: false, ...state, allEvents: updateAllEvents }
            } else {
                return { ...state, loading: false }
            }
        case "SEARCH_EVENT":
            const searchedEvents = state.allEvents.filter((event) => event.description.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1)
        // return { ...state, oldEvents: allEvents, allEvents: searchedEvents, }
        default:
            return state
    }
}