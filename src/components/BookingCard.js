import React, { Component } from 'react';
import singaporeLogo from '../assets/images/logo-singapore.png';
import { Card, Icon, Button } from 'antd';
import { Map, TileLayer, Marker } from 'react-leaflet'


class BookingCard extends Component {

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

        const experiencePosition = {
            lat: this.props.booking.position.lat,
            lng: this.props.booking.position.lon
        };

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
            zIndex: '3000'
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
            display: 'flex'
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

        return (
            <div style={bookingRow}>
                <Map center={experiencePosition} zoom={13} style={mapStyle} zoomControl={false} attributionControl={false} dragging={false} scrollWheelZoom={false}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={experiencePosition}>
                    </Marker>
                </Map>
                <div style={roundImgContainer}>
                    <img src={this.props.booking.image} alt={this.props.booking.title} style={imgStyle} />
                </div>
                <div style={btnContainer}>
                    <Button type="primary" style={btnStyle}><i className="fas fa-times" style={iconStyle}></i><span className='mobile-hidden'>Cancel</span></Button>
                    <Button type="primary" style={btnStyle}><i className="fas fa-pen" style={iconStyle}></i><span className='mobile-hidden'>Modify</span></Button>
                </div>
                <div style={mainBody}>
                    <div style={{ alignSelf: 'center', marginBottom: '10px' }}>{this.props.booking.description}</div>
                    <h2>Informations</h2>
                    <div>
                        <i class="fas fa-exclamation" style={iconStyle}></i>{this.props.booking.requirements ? this.props.booking.requirements : 'None'}
                    </div>
                    <div>
                        <i class="far fa-clock" style={iconStyle}></i>{this.props.booking.startingAt + ' - ' + this.props.booking.endingAt}
                    </div>

                </div>


            </div >
        );
    }
}

export default BookingCard;