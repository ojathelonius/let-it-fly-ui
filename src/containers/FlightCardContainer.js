import { connect } from 'react-redux'
import FlightCard from '../components/FlightCard'
import { openFlightModal } from '../actions/modals'

const mapStateToProps = (state, ownProps) => ({ isFetchingWeather: state.weatherReducer.isFetching, flight: ownProps.flight });

const mapDispatchToProps = (dispatch) => ({
    openFlightModal: (selectedFlight) => dispatch(openFlightModal(selectedFlight))
});

const FlightCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightCard);

export default FlightCardContainer;
