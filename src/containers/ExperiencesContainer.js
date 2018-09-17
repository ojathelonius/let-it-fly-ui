import { connect } from 'react-redux'
import Experiences from '../components/Experiences'
import { fetchExperiences } from '../actions/experiences'
import { closeExperienceModal } from '../actions/modals'
import { bookExperience } from '../actions/bookings'

const mapStateToProps = (state, ownProps) => ({ experiences: state.experiencesReducer.experiences, experienceModal: state.modalReducer.experienceModal, selectedExperience: state.modalReducer.selectedExperience });

const mapDispatchToProps = (dispatch) => ({
    updateExperiences: (airportCode) => dispatch(fetchExperiences(airportCode)),
    closeExperienceModal: () => dispatch(closeExperienceModal()),
    bookExperience: (experience) => dispatch(bookExperience(experience))
});

const ExperiencesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Experiences);

export default ExperiencesContainer;
