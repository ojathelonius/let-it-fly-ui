import React, { Component } from 'react';
import { openNotification } from '../actions/notifications';

class ListItem2 extends Component {

    render() {
        const mainContainer = {
            backgroundColor: "#91cf90",
            padding: "15px",
            margin: "10px",
            display: "flex",
            'flex-direction': 'row'
        }

        const span_center = {
            textAlign: "center",
            flex: "0.4",
            cursor: "pointer"
        }


        return (
            <div class="pax" style={mainContainer}>
                <span>{this.props.item.firstName}</span>
                <span>{this.props.item.lastName}</span>
                <span>{this.props.item.bookingClass}</span>
                <span>{this.props.item.bookingReference}</span>
                <span>+{this.props.item.contact[0].phoneNumber}</span>
                <span style={span_center}><i class="fas fa-bell" onClick={() => openNotification("Customer notified", "The customer was just sent a email and/or a phone notification.")} ></i></span>
                <span style={span_center}><i class="fas fa-check" onClick={() => {this.props.approved(this.props.index);openNotification("Volunteer approved", "The customer has been notified he won't be on the plane.");}} ></i></span>
            </div>
        );

    }
}

export default ListItem2;