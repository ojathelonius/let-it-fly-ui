import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import ColTileContainer from './ColTileContainer';
import FlightCardContainer from '../containers/FlightCardContainer';

class Flights extends Component {

    componentWillMount() {
        /* SIN by default, as the Singapore Airlines API only provides flights from this airport */
        this.props.updateFlights('SIN', this.props.user.initialDestination);
        // this.props.updateWeather();
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

        const alreadyBooked = {
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#1f4a87',
            fontSize: '22px',
            textAlign: 'center'
        }

        const hotelSuggestion = {
            fontSize: '20px',
            marginTop: '15px'
        }
        
        const hotelsLink = {
            fontWeight: 'bold',
            cursor: 'pointer'
        }

        if (this.props.isFetchingFlights || !this.props.flights) {
            return (<Spin size="large" />);
        }
        if(this.props.hasBookedFlights) {
            return (<div style={alreadyBooked}><div>Thank you for booking your flight !</div><div style={hotelSuggestion}>Staying overnight ? Check out our <Link to="/hotels" ><span style={hotelsLink}>custom picked hotels</span></Link> near your stop-over location !</div></div>)
        }
        return (
            <div style={flightsStyle}>
                <div style={largeFont}>Your initial flight was headed to {this.props.user.prettyInitialDestination}. Below are some alternative paths that you can use :</div>
                <ColTileContainer>
                    {this.props.flights.map(flight => (<FlightCardContainer flight={flight} weather={this.getAirportWeather('SIN')} key={flight.id}/>))}
                </ColTileContainer>
            </div>
        );
    }
}

export default Flights;