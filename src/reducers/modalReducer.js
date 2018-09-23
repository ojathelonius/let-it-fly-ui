const initialState = {
    experienceModal: false,
    selectedExperience: {},
    flightModal: false,
    selectedFlight: {},
    hotelModal: false,
    selectedHotel: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_EXPERIENCE_MODAL':
            return {
                ...state,
                experienceModal: true,
                selectedExperience: action.payload
            }
        case 'CLOSE_EXPERIENCE_MODAL':
            return {
                ...state,
                experienceModal: false
            }
        case 'OPEN_FLIGHT_MODAL':
            return {
                ...state,
                flightModal: true,
                selectedFlight: action.payload
            }
        case 'CLOSE_FLIGHT_MODAL':
            return {
                ...state,
                flightModal: false
            }
        case 'OPEN_HOTEL_MODAL':
            return {
                ...state,
                hotelModal: true,
                selectedHotel: action.payload
            }
        case 'CLOSE_HOTEL_MODAL':
            return {
                ...state,
                hotelModal: false
            }
        default:
            return state
    }
}

export default modalReducer;
