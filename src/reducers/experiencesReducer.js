const initialState = {
    experiences: []
}

const experiencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_EXPERIENCES':
            return {
                ...state,
            }
        case 'RECEIVE_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload
            }
        default:
            return state
    }
}

export default experiencesReducer;
