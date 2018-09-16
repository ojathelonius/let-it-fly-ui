import React, { Component } from 'react';
import { Spin, Modal } from 'antd';
import RowTileContainer from './RowTileContainer';
import ExperienceCardContainer from '../containers/ExperienceCardContainer';

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

        const mediumFont = {
            fontSize: '18px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
        }

        const experienceList = this.props.experiences;

        const experienceDisplay = experienceList.length === 0 ?
            (<Spin size="large" />)
            : experienceList.map(experience => <ExperienceCardContainer experience={experience} key={experience.id} />)

        return (
            <div style={experiencesStyle}>
                <div style={largeFont}>We have several entertaining activities for you and your peers !</div>
                <div style={mediumFont}>Everything will be arranged until you can get on the next flight towards your destination, from housing to transportation and any accomodation necessary.</div>
                <RowTileContainer>
                    {experienceDisplay}
                </RowTileContainer>

                <Modal
                    title={this.props.selectedExperience.title}
                    visible={this.props.experienceModal}
                    centered
                    footer={null}
                    onCancel={() => this.props.closeExperienceModal()}
                >
                </Modal>
            </div>
        );
    }
}

export default Experiences;