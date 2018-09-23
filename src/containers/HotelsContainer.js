import { connect } from 'react-redux'
import Hotels from '../components/Hotels'
import { fetchHotels } from '../actions/hotels'
import { fetchFlights } from '../actions/flights'
import { closeHotelModal } from '../actions/modals'
import { bookHotel } from '../actions/bookings'


const mapStateToProps = (state, ownProps) => ({ hotels : state.hotelsReducer.hotels, 
    bookedFlight : state.bookingsReducer.flight, 
    departingAirport: state.userReducer.departingAirport,
    hotelModal: state.modalReducer.hotelModal,
    selectedHotel: state.modalReducer.selectedHotel
 });

const mapDispatchToProps = (dispatch) => ({
    updateHotels: (airportCode) => dispatch(fetchHotels(airportCode)),
    closeHotelModal: () => dispatch(closeHotelModal()),
    bookHotel: (selectedHotel) => dispatch(bookHotel(selectedHotel))
});

const HotelsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hotels);

export default HotelsContainer;
