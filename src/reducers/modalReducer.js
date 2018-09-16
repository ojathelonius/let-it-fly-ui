const initialState = {
    experienceModal: false,
    experienceModalId : null,
    selectedExperience: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_EXPERIENCE_MODAL':
            return {
                ...state,
                experienceModal: true,
                selectedExperience : action.payload
            }
        case 'CLOSE_EXPERIENCE_MODAL':
            return {
                ...state,
                experienceModal: false
            }
        default:
            return state
    }
}

export default modalReducer;
