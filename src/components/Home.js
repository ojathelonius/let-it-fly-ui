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
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#00266b',
            boxShadow: 'inset 0px 11px 8px -10px black, inset 0px -11px 8px -10px black'
        }

        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
        }

        const bodyStyle = {
            padding: 0,
            borderTop: '1px solid #fcb130'
        }
        
        const headStyle = {
            backgroundColor: '#fcb130'
        }
        return (
            <div style={homeStyle}>
                <div style={largeFont}>We are sorry that you cannot make it on board...</div>
                <div style={mediumFont}>Please let us work together on this issue by selecting an option below.</div>
                <div style={tileContainer}>
                    <Card
                        title="Hitchike a flight"
                        style={tileStyle}
                        headStyle={headStyle}
                        bodyStyle={bodyStyle}
                        hoverable={true}
                    >
                    <img src={flightImg} alt="Hitchike a flight"/>
                    </Card>
                    <Card
                        title="Extend your vacation"
                        style={tileStyle}
                        headStyle={headStyle}
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