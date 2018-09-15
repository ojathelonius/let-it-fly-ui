import React, { Component } from 'react';
import { Card } from 'antd';
import flightImg from '../assets/images/flight-img.jpg';
import entertainmentImg from '../assets/images/entertainment-img.jpg';

class Home extends Component {
    render() {
        const homeStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px 20px',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px'
        }

        const mediumFont = {
            fontSize: '18px',
            marginTop: '10px'
        }

        const tileContainer = {
            display: 'flex',
            flex: '0.8',
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        const tileStyle = {
            margin: '10px'
        }

        const bodyStyle = {
            padding: 0
        }
        return (
            <div style={homeStyle}>
                <div style={largeFont}>We are sorry that you cannot make it on board...</div>
                <div style={mediumFont}>Please let us work together on this issue by selecting an option below.</div>
                <div style={tileContainer}>
                    <Card
                        title="Hitchike a flight"
                        style={tileStyle}
                        bodyStyle={bodyStyle}
                        hoverable={true}
                    >
                    <img src={flightImg} alt="Hitchike a flight"/>
                    </Card>
                    <Card
                        title="Extend your vacation"
                        style={tileStyle}
                        bodyStyle={bodyStyle}
                        hoverable={true}
                    >
                    <img src={entertainmentImg} alt="Extend your vacation"/>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;