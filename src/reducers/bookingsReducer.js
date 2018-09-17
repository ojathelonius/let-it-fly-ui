const initialState = {
    bookings: []
}

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOKING':
            return {
                ...state,
                bookings: [...state.bookings,
                action.payload]
            }
        default:
            return state
    }
}

export default bookingsReducer;
