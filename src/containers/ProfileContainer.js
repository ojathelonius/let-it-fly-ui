import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { changeProfile, fetchProfile } from '../actions/profile'

const mapStateToProps = (state, ownProps) => ({
    profile: state.userReducer.profile,
    isFetchingProfile : state.userReducer.isFetching,
    demoProfile : state.userReducer.demoProfile,
    listAllProfiles : state.userReducer.listAllProfiles
});

const mapDispatchToProps = (dispatch) => ({
    changeProfile: (id) => dispatch(changeProfile(id)),
    updateProfile: (id) => dispatch(fetchProfile(id))
});

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileContainer;
