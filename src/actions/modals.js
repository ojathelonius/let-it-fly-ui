export const openExperienceModal = (selectedExperience) => ({
    type: 'OPEN_EXPERIENCE_MODAL',
    payload: selectedExperience

})

export const closeExperienceModal = () => ({
    type: 'CLOSE_EXPERIENCE_MODAL'
})

export const openBookingCancelModal = (selectedBooking) => ({
    type: 'OPEN_BOOKING_CANCEL_MODAL',
    payload: selectedBooking
})

export const closeBookingCancelModal = () => ({
    type: 'CLOSE_BOOKING_CANCEL_MODAL'
})

export const openFlightModal = (selectedFlight) => ({
    type: 'OPEN_FLIGHT_MODAL',
    payload: selectedFlight

})

export const closeFlightModal = () => ({
    type: 'CLOSE_FLIGHT_MODAL'
})

export const openHotelModal = (selectedHotel) => ({
    type: 'OPEN_HOTEL_MODAL',
    payload: selectedHotel

})

export const closeHotelModal = () => ({
    type: 'CLOSE_HOTEL_MODAL'
})

