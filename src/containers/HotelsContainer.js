import { connect } from 'react-redux'
import Hotels from '../components/Hotels'
import { fetchHotels } from '../actions/hotels'

const mapStateToProps = (state, ownProps) => ({ hotels : state.hotelsReducer.hotels, bookedFlight : state.bookingsReducer.flight, departingAirport: state.userReducer.departingAirport });

const mapDispatchToProps = (dispatch) => ({
    updateHotels: (airportCode) => dispatch(fetchHotels(airportCode))
});

const HotelsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hotels);

export default HotelsContainer;
