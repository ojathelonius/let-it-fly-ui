/* Demo purposes : initial destination is set to Paris */

const initialState = {
    initialDestination: 'paris',
    prettyInitialDestination: 'Paris'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default userReducer;
