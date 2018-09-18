import { connect } from 'react-redux'
import FlightCard from '../components/FlightCard'

const mapStateToProps = (state, ownProps) => ({ isFetchingWeather: state.weatherReducer.isFetching, flight: ownProps.flight });

const mapDispatchToProps = (dispatch) => ({});

const FlightCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightCard);

export default FlightCardContainer;
