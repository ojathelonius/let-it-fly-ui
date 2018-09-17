import React, { Component } from 'react';
import ColTileContainer from './ColTileContainer';
import FlightCardContainer from '../containers/FlightCardContainer';

class Flights extends Component {

    componentWillMount() {
        this.props.updateWeather();
    }

    getAirportWeather(airportCode) {
        return this.props.weather ?
            this.props.weather.find(airportWeather => airportWeather.location === airportCode)
            : {};
    }

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
                    <FlightCardContainer airportCode='SIN' weather={this.getAirportWeather('SIN')} />
                    <FlightCardContainer airportCode='SFO' weather={this.getAirportWeather('SFO')}/>
                </ColTileContainer>
            </div>
        );
    }
}

export default Flights;