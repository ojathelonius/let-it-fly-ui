import { closeExperienceModal } from './modals';

export const bookExperience = (experience) => (dispatch) => {

    dispatch(closeExperienceModal());

    dispatch({
        type: 'ADD_BOOKING',
        payload: experience
    });
}
