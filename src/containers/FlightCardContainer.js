import { connect } from 'react-redux'
import FlightCard from '../components/FlightCard'
import { fetchWeather } from '../actions/weather'

const mapStateToProps = (state, ownProps) => ({ weather: state.weatherReducer.weather, isFetchingWeather : state.weatherReducer.isFetching });

const mapDispatchToProps = (dispatch) => ({
    updateWeather: (airportCode) => dispatch(fetchWeather(airportCode))
});

const FlightCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightCard);

export default FlightCardContainer;
