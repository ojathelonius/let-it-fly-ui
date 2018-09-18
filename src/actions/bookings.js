import { closeExperienceModal } from './modals';
import { openNotification } from './notifications';

export const bookExperience = (experience) => (dispatch) => {

    dispatch(closeExperienceModal());

    dispatch({
        type: 'ADD_BOOKING',
        payload: experience
    });

    openNotification('Booking confirmed !', 'Your booking has been confirmed. You can now check it in My Bookings.');
}
