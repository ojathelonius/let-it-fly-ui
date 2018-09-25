/* Demo purposes : initial destination is set to Paris */

const initialState = {
    defaultDemoProfile : 1,
    departingAirport: 'SIN',
    initialDestination: 'SFO',
    prettyInitialDestination: 'San Francisco',
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
                defaultDemoProfile: action.payload.profileId
            }
        default:
            return state
    }
}

export default userReducer;
