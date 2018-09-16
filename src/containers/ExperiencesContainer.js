import { connect } from 'react-redux'
import Experiences from '../components/Experiences'
import { fetchExperiences } from '../actions/experiences'

const mapStateToProps = (state, ownProps) => ({ experiences: state.experiencesReducer.experiences });

const mapDispatchToProps = (dispatch) => ({
    updateExperiences: (airportCode) => dispatch(fetchExperiences(airportCode))
});

const ExperiencesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Experiences);

export default ExperiencesContainer;
