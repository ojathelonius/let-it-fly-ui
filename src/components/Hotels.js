import React, { Component } from 'react';

class Hotels extends Component {

    componentWillMount() {
        /* If there is a booked flight with a layover, show hotels nearby, otherwise show hotels from departing airport */
        if(this.props.bookedFlight && this.props.bookedFlight.layover) {
            this.props.updateHotels(this.props.bookedFlight.itinerary[0].to);
        } else {
            this.props.updateHotels(this.props.departingAirport)
        }
    }

    render() {


        return (
            <div>
                toto
               {this.props.hotels.map(hotel => hotel.title)}
            </div>
        );
    }
}

export default Hotels;