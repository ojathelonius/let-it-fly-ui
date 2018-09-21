import { connect } from 'react-redux'
import Flights from '../components/Flights'
import { fetchWeather } from '../actions/weather'
import { fetchFlights } from '../actions/flights'
import { closeFlightModal } from '../actions/modals'
import { bookFlight } from '../actions/bookings'

const mapStateToProps = (state, ownProps) => ({
    weather: state.weatherReducer.weather,
    user: state.userReducer,
    isFetchingFlights: state.flightsReducer.isFetching,
    flights: state.flightsReducer.flights,
    hasBookedFlights: state.bookingsReducer.flight,
    flightModal: state.modalReducer.flightModal,
    selectedFlight: state.modalReducer.selectedFlight
});

const mapDispatchToProps = (dispatch) => ({
    updateWeather: () => dispatch(fetchWeather()),
    updateFlights: (city, destination) => dispatch(fetchFlights(city, destination)),
    closeFlightModal: () => dispatch(closeFlightModal()),
    bookFlight: (selectedFlight) => dispatch(bookFlight(selectedFlight))
});

const FlightsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

export default FlightsContainer;
