import React, { Component } from 'react';
import { Card } from 'antd';

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

        return (
            <Card
                title={this.props.experience.title}
                style={tileStyle}
                headStyle={headStyle}
                bodyStyle={bodyStyle}
                hoverable={true}
                onClick={() => this.props.openExperienceModal(this.props.experience)}
            >
                <img src={this.props.experience.image} alt={this.props.experience.title} />
            </Card>

        );
    }
}

export default ExperienceCard;