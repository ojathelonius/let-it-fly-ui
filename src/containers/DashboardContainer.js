import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { approved, volunteered } from '../actions/hotels'

const mapStateToProps = (state, ownProps) => ({
    vol : state.hotelsReducer.vol, 
    app: state.hotelsReducer.approved,
});

const mapDispatchToProps = (dispatch) => ({
    approvedd: (index) => dispatch(approved(index)),
    vold: (index) => dispatch(volunteered(index))
});

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
