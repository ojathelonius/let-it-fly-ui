const initialState = {
    experiences: [],
    flight: null,
    hotels: []
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
        case 'ADD_BOOKING_HOTEL':
            return {
                ...state,
                hotels: [...state.hotels,
                action.payload]
            }
        case 'RESET_BOOKINGS':
            return {
                ...state,
                hotels: [],
                flight: null,
                experiences: []
            }
        default:
            return state
    }
}

export default bookingsReducer;
