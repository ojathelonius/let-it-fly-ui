const initialState = {
    demoProfile : 1,
    departingAirport: 'SIN',
    profile: null,
    isFetching: false,
    listAllProfiles : null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_PROFILE':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_PROFILE':
            return {
                ...state,
                isFetching: false,
                profile: action.payload.profile,
                listAllProfiles: action.payload.allProfiles,
                demoProfile: action.payload.profileId
            }
        default:
            return state
    }
}

export default userReducer;
