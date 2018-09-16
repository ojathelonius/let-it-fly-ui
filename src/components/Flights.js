import React, { Component } from 'react';
import ColTileContainer from './ColTileContainer';
import FlightCardContainer from '../containers/FlightCardContainer';

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

        return (
            <div style={flightsStyle}>
                <div style={largeFont}>Here are some flight options for you to consider : </div>
                <ColTileContainer>
                    <FlightCardContainer airportCode='SIN'/>
                    <FlightCardContainer airportCode='SFO'/>
                </ColTileContainer>
            </div>
        );
    }
}

export default Flights;