import { connect } from 'react-redux'
import FlightCard from '../components/FlightCard'
import { bookFlight } from '../actions/bookings'

const mapStateToProps = (state, ownProps) => ({ isFetchingWeather: state.weatherReducer.isFetching, flight: ownProps.flight });

const mapDispatchToProps = (dispatch) => ({
    bookFlight: (selectedFlight) => dispatch(bookFlight(selectedFlight))
});

const FlightCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightCard);

export default FlightCardContainer;
