import { connect } from 'react-redux'
import ExperienceCard from '../components/ExperienceCard'
import { openExperienceModal } from '../actions/modals'

const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = (dispatch) => ({
    openExperienceModal: (selectedExperience) => dispatch(openExperienceModal(selectedExperience))
});

const ExperienceCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperienceCard);

export default ExperienceCardContainer;
