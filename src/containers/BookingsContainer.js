import { connect } from 'react-redux'
import Bookings from '../components/Bookings'

const mapStateToProps = (state, ownProps) => ({ bookings : state.bookingsReducer.bookings });

const mapDispatchToProps = (dispatch) => ({
});

const BookingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bookings);

export default BookingsContainer;
