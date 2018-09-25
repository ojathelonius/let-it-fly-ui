import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = (state, ownProps) => ({
    profile: state.userReducer.profile,
    isFetchingProfile : state.userReducer.isFetching,
    defaultDemoProfile : state.userReducer.defaultDemoProfile,
    listAllProfiles : state.userReducer.listAllProfiles
});

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (id) => dispatch(fetchProfile(id)),
});

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileContainer;
