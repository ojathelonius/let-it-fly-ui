import { connect } from 'react-redux'
import Flights from '../components/Flights'
import { fetchWeather } from '../actions/weather'
import { fetchFlights } from '../actions/flights'

const mapStateToProps = (state, ownProps) => ({
    weather: state.weatherReducer.weather,
    user: state.userReducer,
    isFetchingFlights: state.flightsReducer.isFetching,
    flights: state.flightsReducer.flights,
    hasBookedFlights: (state.bookingsReducer.flights.length > 0)
});

const mapDispatchToProps = (dispatch) => ({
    updateWeather: () => dispatch(fetchWeather()),
    updateFlights: (city, destination) => dispatch(fetchFlights(city, destination)),
});

const FlightsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

export default FlightsContainer;
