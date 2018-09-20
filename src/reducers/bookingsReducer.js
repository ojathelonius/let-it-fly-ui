const initialState = {
    experiences: [],
    flight: null
}

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOKING_EXPERIENCE':
            return {
                ...state,
                experiences: [...state.experiences,
                action.payload]
            }
        case 'ADD_BOOKING_FLIGHT':
            return {
                ...state,
                flight: action.payload
            }
        default:
            return state
    }
}

export default bookingsReducer;
