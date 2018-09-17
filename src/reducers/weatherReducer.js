const initialState = {
    weather: null,
    isFetching: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_WEATHER':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_WEATHER':
            return {
                ...state,
                isFetching: false,
                weather: action.payload
            }
        default:
            return state
    }
}

export default weatherReducer;
