import { connect } from 'react-redux'
import Bookings from '../components/Bookings'

const mapStateToProps = (state, ownProps) => ({ experiences : state.bookingsReducer.experiences, flight: state.bookingsReducer.flight, hotels: state.bookingsReducer.hotels });

const mapDispatchToProps = (dispatch) => ({
});

const BookingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookings);

export default BookingsContainer;
