import { connect } from 'react-redux'
import Flights from '../components/Flights'
import { fetchWeather } from '../actions/weather'

const mapStateToProps = (state, ownProps) => ({ weather: state.weatherReducer.weather });

const mapDispatchToProps = (dispatch) => ({
    updateWeather: () => dispatch(fetchWeather())
});

const FlightsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Flights);

export default FlightsContainer;
