import React, { Component } from 'react';
import HotelCardContainer from '../containers/HotelCardContainer';
import { Modal } from 'antd';

class Hotels extends Component {

    componentWillMount() {
        /* If there is a booked flight with a layover, show hotels nearby, otherwise show hotels from departing airport */
        if (this.props.bookedFlight && this.props.bookedFlight.layover) {
            this.props.updateHotels(this.props.bookedFlight.itinerary[0].to);
        } else {
            this.props.updateHotels(this.props.departingAirport)
        }
    }

    render() {

        const mainContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        };

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
            alignSelf: 'flex-end',
            marginTop: '20px'
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

        return (
            <div style={mainContainer}>
                {this.props.hotels.length > 0 ? this.props.hotels.map(hotel => (
                    <HotelCardContainer hotel={hotel} booked={false} />
                )) : ''}

                <Modal
                    style={{zIndex: '3000'}}
                    title={`Confirmation`}
                    visible={this.props.hotelModal}
                    centered
                    footer={null}
                    onCancel={() => this.props.closeHotelModal()}
                    bodyStyle={bodyStyle}
                >
                    You are about to book a a hotel. Do you really want to proceed ?

                    <div style={bookBtnStyle} onClick={() => this.props.bookHotel(this.props.selectedHotel)}><i className="fas fa-check" style={iconStyle}></i>Book it !</div>
                </Modal>
            </div>
        );
    }
}

export default Hotels;