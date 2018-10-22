const initialState = {
    hotels: [],
    approved: [],
    vol: [5,8,10,16]
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
        case 'APPROVED':
            let a = [...state.vol];
            console.log(a);
            console.log(action.payload);
            let b = a[action.payload];
            a.splice(action.payload,1);
            let c = [...state.approved, b];
            return {
                ...state,
                approved: c,
                vol: a
            }
        case 'VOL':
            return {
                ...state,
                vol: [...state.vol, action.payload]
            }
        default:
            return state
    }
}

export default hotelsReducer;
