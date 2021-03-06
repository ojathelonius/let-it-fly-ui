import React, { Component } from 'react';
import singaporeLogo from '../assets/images/logo-singapore.png';
import { Card, Spin } from 'antd';
import { Map, TileLayer, Marker } from 'react-leaflet';
import BookedExperienceCard from './BookedExperienceCard';
import BookedFlightCard from './BookedFlightCard';
import HotelCardContainer from '../containers/HotelCardContainer';


class Bookings extends Component {

    componentWillMount() {
    }

    render() {
        const bookingsContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center',
            marginBottom: '20px',
            marginTop: '10px'
        }
        const titleStyle = {
            color: '#1f4a87'
        }

        const experiencesDisplay = this.props.experiences.length > 0 ? this.props.experiences.map(experience =>
            (
                <BookedExperienceCard experience={experience} key={experience.id} />
            )
        ) : '';

        const flightDisplay = (<BookedFlightCard flight={this.props.flight}/>)

        const hotelsDisplay = this.props.hotels.length > 0 ? this.props.hotels.map(hotel =>
            (
                <HotelCardContainer hotel={hotel} key={hotel.id} booked={true}/>
            )
        ) : '';

        const hasBookings = (this.props.experiences.length > 0 || this.props.flight || this.props.hotels.length > 0 );

        if (!hasBookings) {
            return (
                <div style={bookingsContainer}>
                    <div style={largeFont}>
                        You don't have any bookings.
                    </div>
                </div>
            );
        } else {
            return (
                <div style={bookingsContainer}>
                    <div style={largeFont}>
                        You can review your bookings below.
                    </div>
                    {this.props.experiences.length > 0 ? (<h1 style={titleStyle}>Experiences</h1>) : ''}
                    {experiencesDisplay}
                    {this.props.flight ? (<h1 style={titleStyle}>Flights</h1>) : ''}
                    {flightDisplay}
                    {this.props.hotels.length > 0 ? (<h1 style={titleStyle}>Hotels</h1>) : ''}
                    {hotelsDisplay}
                </div>
            );
        }

    }
}

export default Bookings;