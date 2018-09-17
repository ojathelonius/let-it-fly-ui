import React, { Component } from 'react';
import singaporeLogo from '../assets/images/logo-singapore.png';
import { Card, Spin } from 'antd';
import { Map, TileLayer, Marker } from 'react-leaflet';
import BookingCard from './BookingCard';


class Bookings extends Component {

    componentWillMount() {
    }

    render() {
        const bookingsContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(to top, #fcb130 , #f7f7f7)',
            padding: '20px',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center',
            marginBottom: '20px'
        }

        console.log(this.props.bookings);
        const bookingsDisplay = this.props.bookings.length > 0 ? this.props.bookings.map(booking =>
            (
                <BookingCard booking={booking} key={booking.id}/>
            )
        ) : '';

        return (
            <div style={bookingsContainer}>
                <div style={largeFont}>
                    {this.props.bookings.length === 0 ? "You don't have any bookings."
                        : 'You can review your bookings below.'
                    }</div>
                {bookingsDisplay}
            </div>
        );
    }
}

export default Bookings;