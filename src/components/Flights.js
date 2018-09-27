import React, { Component } from 'react';
import { Spin, Modal } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import ColTileContainer from './ColTileContainer';
import FlightCardContainer from '../containers/FlightCardContainer';

class Flights extends Component {

    componentWillMount() {
        /* SIN by default, as the Singapore Airlines API only provides flights from this airport */
        if(!this.props.user.profile) {
            window.location.replace('/');
        }
        this.props.updateFlights('SIN', this.props.user.profile.goingToAirport); 
        // this.props.updateWeather();
        console.log(this.props.flights)
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

        const bookBtnStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '40px',
            justifyContent: 'center',
            backgroundColor: '#fcb130',
            padding: '10px',
            borderRadius: '3px',
            width: '150px',
            cursor: 'pointer',
            alignSelf: 'flex-end'
        }

        const iconStyle = {
            fontSize: '18px',
            width: '40px',
            textAlign: 'center'
        }

        const bodyStyle = {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }

        const iconContainer = {
            display: 'flex',
            alignItems: 'center'
        }

        const itinerary = this.props.selectedFlight.itinerary ? [].concat(...this.props.selectedFlight.itinerary.map(e => ['layover', e])).slice(1) : '';

        if (this.props.isFetchingFlights || !this.props.flights) {
            return (<Spin size="large" />);
        }
        if (this.props.hasBookedFlights) {
            return (<div style={alreadyBooked}><div>Thank you for booking your flight !</div><div style={hotelSuggestion}>Staying overnight ? Check out our <Link to="/hotels" ><span style={hotelsLink}>custom picked hotels</span></Link> near your stop-over location !</div></div>)
        }
        return (
            <div style={flightsStyle}>
                <div style={largeFont}>Your initial flight was headed to {this.props.user.profile.goingTo}. Below are some alternative paths that you can use :</div>
                <ColTileContainer>
                    {this.props.flights.map(flight => (<FlightCardContainer flight={flight} weather={this.getAirportWeather('SIN')} key={flight.id} />))}
                </ColTileContainer>
                <Modal
                    title={`Confirmation`}
                    visible={this.props.flightModal}
                    centered
                    footer={null}
                    onCancel={() => this.props.closeFlightModal()}
                    bodyStyle={bodyStyle}
                >
                    You are about to book a new flight. Your previous booking will be cancelled and replaced with this one.

                <h2 style={{ marginTop: '10px' }}>Summary</h2>
                    {this.props.selectedFlight.itinerary ? itinerary.map((curFlight, index, arr) => {
                        if(curFlight === 'layover'){
                            return (<span style={{margin: '10px 0px', fontWeight: 'bold'}}>Layover for {this.props.selectedFlight.timeInBetween}</span>)
                        }
                        
                        return (
                            <div style={{marginBottom: '5px 0px'}}>Flight from {curFlight.fromCity} to {curFlight.toCity}
                                <div style={iconContainer}>
                                    <i className="far fa-calendar" style={iconStyle}></i>{curFlight.departureDate}
                                </div>
                                <div style={iconContainer}>
                                    <i className="far fa-clock" style={iconStyle}></i>{curFlight.departureTime} ({curFlight.duration})
                                </div>
                                <div style={iconContainer}>
                                    <i className="fas fa-plane" style={iconStyle}></i>{curFlight.airline}
                                </div>
                            </div>
                        );
                    }) : ''}
                    <div style={bookBtnStyle} onClick={() => this.props.bookFlight(this.props.selectedFlight)}><i className="fas fa-check" style={iconStyle}></i>Book it !</div>
                </Modal>
            </div>
        );
    }
}

export default Flights;