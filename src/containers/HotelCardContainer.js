import { connect } from 'react-redux'
import HotelCard from '../components/HotelCard'
import { openHotelModal } from '../actions/modals'

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch) => ({
    openHotelModal: (selectedHotel) => dispatch(openHotelModal(selectedHotel))
});

const HotelCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelCard);

export default HotelCardContainer;
