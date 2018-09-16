import React, { Component } from 'react';
import RowTileContainer from './RowTileContainer';
import ExperienceCard from './ExperienceCard';

class Experiences extends Component {


    componentWillMount() {
        /* Singapor airport for demo purposes */
        this.props.updateExperiences('SIN');
    }

    render() {
        const experiencesStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
        }

        const experienceList = this.props.experiences;

        const experienceDisplay = experienceList.length == 0 ?
            ''
            : experienceList.map(experience => <ExperienceCard experience={experience} key={experience.id}/>)

        console.log(experienceList);
        return (
            <div style={experiencesStyle}>
                <div style={largeFont}>We have several entertaining activities for you and your peers. See below !</div>
                <RowTileContainer>
                    {experienceDisplay}
                </RowTileContainer>
            </div>
        );
    }
}

export default Experiences;