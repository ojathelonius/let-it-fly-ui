import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { approved } from '../actions/hotels'

const mapStateToProps = (state, ownProps) => ({
    vol : state.hotelsReducer.vol, 
    app: state.hotelsReducer.approved,
});

const mapDispatchToProps = (dispatch) => ({
    approvedd: (index) => dispatch(approved(index))
});

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
