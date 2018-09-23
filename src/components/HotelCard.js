import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';
import { Map, TileLayer, Marker } from 'react-leaflet'



class HotelCard extends Component {

    componentWillMount() {
    }


    render() {

        const bookingRow = {
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            backgroundColor: 'white',
            borderRadius: '5px',
            border: '1px solid #1f4a87',
            position: 'relative',
            marginBottom: '30px'
        }

        const tileStyle = {
            border: '1px solid #1f4a87',
            margin: '5px',
            borderRadius: '3px',
            flex: '0 1 800px'
        }

        const headStyle = {
            backgroundColor: '#1f4a87',
            color: 'white'
        }

        const bodyStyle = {
            padding: 0,
            borderTop: '1px solid #1f4a87'
        }

        const mapStyle = {
            height: '150px',
            borderBottom: '1px solid #1f4a87'
        }

        const mainBody = {
            padding: '20px',
            marginTop: '45px',
            fontSize: '15px',
            display: 'flex',
            flexDirection: 'column'
        }

        const roundImgContainer = {
            width: '150px',
            height: '150px',
            overflow: 'hidden',
            borderRadius: '50%',
            margin: '0 auto',
            top: '90px',
            border: '1px solid #1f4a87',
            left: '0%',
            right: '0%',
            position: 'absolute',
            zIndex: '500'
        }

        const imgStyle = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            height: '100%',
            width: 'auto',
            transform: 'translate(-50%,-50%)'
        }

        const btnContainer = {
            display: 'flex',
            backgroundColor: '#1f4a87'
        };

        const btnStyle = {
            flex: '1',
            borderRadius: '0',
            backgroundColor: '#1f4a87',
            height: '40px',
            border: 'none'
        }

        const iconStyle = {
            fontSize: '18px',
            width: '40px',
            textAlign: 'center'
        }

        const hotelPosition = {
            lat: this.props.hotel.position.lat,
            lng: this.props.hotel.position.lon
        };

        const iconContainer = {
            display: 'flex',
            alignItems: 'center'
        }

        return (
            <div style={bookingRow}>
                <Map center={hotelPosition} zoom={13} style={mapStyle} zoomControl={false} attributionControl={false} dragging={false} scrollWheelZoom={false}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={hotelPosition}>
                    </Marker>
                </Map>
                <div style={roundImgContainer}>
                    <img src={this.props.hotel.image} alt={this.props.hotel.title} style={imgStyle} />
                </div>
                <div style={btnContainer}>
                    <div style={{ flex: '1' }}></div>
                    {this.props.booked ? (<Button type="primary" style={btnStyle}><i className="fas fa-times" style={iconStyle} ></i><span className='mobile-hidden'>Cancel</span></Button>) : (
                        <Button type="primary" style={btnStyle} onClick={() => this.props.openHotelModal(this.props.hotel)}><i className="fas fa-check" style={iconStyle} ></i><span className='mobile-hidden'>Book</span></Button>
                    )}

                </div>
                <div style={mainBody}>
                    <div style={{ alignSelf: 'center', marginBottom: '10px' }}>{this.props.hotel.description}</div>
                    <h2>Informations</h2>
                    {this.props.hotel.breakfast ? (
                        <div style={iconContainer}>
                            <i className="fas fa-coffee" style={iconStyle}></i>Breakfast included
                        </div>) : ''}
                    {this.props.hotel.pool ? (
                        <div style={iconContainer}>
                            <i className="fas fa-swimming-pool" style={iconStyle}></i>Pool
                        </div>) : ''}
                    {this.props.hotel.ac ? (
                        <div style={iconContainer}>
                            <i className="fas fa-snowflake" style={iconStyle}></i>Air conditioned
                        </div>) : ''}
                    {this.props.hotel.parking ? (
                        <div style={iconContainer}>
                            <i className="fas fa-parking" style={iconStyle}></i>Parking
                        </div>) : ''}
                </div>
            </div >
        );
    }
}

export default HotelCard;