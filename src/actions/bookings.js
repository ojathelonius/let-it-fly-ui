import { closeExperienceModal, closeFlightModal } from './modals';
import { openNotification } from './notifications';

export const bookExperience = (experience) => (dispatch) => {

    dispatch(closeExperienceModal());

    dispatch({
        type: 'ADD_BOOKING_EXPERIENCE',
        payload: experience
    });

    openNotification('Booking confirmed !', 'Your booking has been confirmed. You can now check it in My Bookings.');
}

export const bookFlight = (flight) => (dispatch) => {

    dispatch(closeFlightModal());

    dispatch({
        type: 'ADD_BOOKING_FLIGHT',
        payload: flight
    });

    openNotification('Booking confirmed !', 'Your flight has been booked. You can now check it in My Bookings.');
}
