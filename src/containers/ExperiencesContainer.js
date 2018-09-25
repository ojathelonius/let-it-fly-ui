import { connect } from 'react-redux'
import Experiences from '../components/Experiences'
import { fetchExperiences } from '../actions/experiences'
import { closeExperienceModal } from '../actions/modals'
import { bookExperience } from '../actions/bookings'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = (state, ownProps) => ({ experiences: state.experiencesReducer.experiences,
    experienceModal: state.modalReducer.experienceModal,
    selectedExperience: state.modalReducer.selectedExperience,
    userProfile:  state.userReducer.profile,
    demoProfile : state.userReducer.demoProfile,
    isFetchingProfile : state.userReducer.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    updateExperiences: (airportCode) => dispatch(fetchExperiences(airportCode)),
    closeExperienceModal: () => dispatch(closeExperienceModal()),
    bookExperience: (experience) => dispatch(bookExperience(experience)),
    updateProfile: (id) => dispatch(fetchProfile(id)),
});

const ExperiencesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Experiences);

export default ExperiencesContainer;
