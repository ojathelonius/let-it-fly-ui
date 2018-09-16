import React, { Component } from 'react';
import { Card } from 'antd';
import ColTileContainer from './ColTileContainer';
import flightImg from '../assets/images/flight-img.jpg';
import entertainmentImg from '../assets/images/entertainment-img.jpg';

class Flights extends Component {
    
    render() {
        const flightsStyle = {
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

        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
            width: '500px'
        }

        const bodyStyle = {
            borderTop: '1px solid #fcb130'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }
        
        return (
            <div style={flightsStyle}>
                <div style={largeFont}>Here are some flight options for you to consider : </div>
                <ColTileContainer><Card
                    title="Flight to Madrid"
                    style={tileStyle}
                    headStyle={headStyle}
                    bodyStyle={bodyStyle}
                    hoverable={true}
                >
                    <p>Toast toast</p>
                </Card>
                    <Card
                        title="Flight to Paris"
                        style={tileStyle}
                        headStyle={headStyle}
                        bodyStyle={bodyStyle}
                        hoverable={true}
                    >
                        <p>Toast toast</p>
                    </Card></ColTileContainer>
            </div>
        );
    }
}

export default Flights;