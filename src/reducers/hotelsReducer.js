const initialState = {
    hotels: []
}

const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_HOTELS':
            return {
                ...state,
            }
        case 'RECEIVE_HOTELS':
            return {
                ...state,
                hotels: action.payload
            }
        default:
            return state
    }
}

export default hotelsReducer;
