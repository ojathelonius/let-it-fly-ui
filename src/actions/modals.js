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

