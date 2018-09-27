import { connect } from 'react-redux'
import Home from '../components/Home'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = (state, ownProps) => ({
    profile: state.userReducer.profile,
    isFetchingProfile: state.userReducer.isFetching,
    demoProfile: state.userReducer.demoProfile
});

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (id) => dispatch(fetchProfile(id))
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
