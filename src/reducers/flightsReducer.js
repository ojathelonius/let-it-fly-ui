const initialState = {
    fights: [],
    isFetching: false
}

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_FLIGHTS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_FLIGHTS':
            return {
                ...state,
                isFetching: false,
                flights: action.payload
            }
        default:
            return state
    }
}

export default flightsReducer;
