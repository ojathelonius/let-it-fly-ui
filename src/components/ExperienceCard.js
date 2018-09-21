import React, { Component } from 'react';
import { Card } from 'antd';
import airbnbLogo from '../assets/images/logo-airbnb.png';
import tripadvisorLogo from '../assets/images/logo-tripadvisor.png';

class ExperienceCard extends Component {

    render() {


        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
        }

        const bodyStyle = {
            borderTop: '1px solid #fcb130',
            padding: '0'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }

        
        const logoStyle = {
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            maxWidth: '150px'
        }

        const imgStyle = {
            maxWidth: '100%'
        }

        let partnerLogo;

        if (this.props.experience.source === 'airbnb') {
            partnerLogo = (<img src={airbnbLogo} alt='AirBnB logo'  style={logoStyle}/>)
        } else if (this.props.experience.source === 'tripadvisor') {
            partnerLogo = (<img src={tripadvisorLogo} alt='TripAdvisor logo' style={logoStyle} />)
        }


        return (
            <Card
                title={this.props.experience.title}
                style={tileStyle}
                headStyle={headStyle}
                bodyStyle={bodyStyle}
                hoverable={true}
                onClick={() => this.props.openExperienceModal(this.props.experience)}
            >
                <img src={this.props.experience.image} alt={this.props.experience.title} style={imgStyle} />
                {partnerLogo}
            </Card>

        );
    }
}

export default ExperienceCard;