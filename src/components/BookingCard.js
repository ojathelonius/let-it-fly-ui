import React, { Component } from 'react';
import singaporeLogo from '../assets/images/logo-singapore.png';
import { Card, Icon } from 'antd';
import { Map, TileLayer, Marker } from 'react-leaflet'


class BookingCard extends Component {

    componentWillMount() {
    }

    render() {


        const bookingRow = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: '100%'
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

        const imgStyle = {
            borderRadius: '2px',
            border: '1px solid #1f4a87',
            borderRadius: '3px',
            margin: '5px'
        }

        const mapStyle = {
            height: '100px',
            borderBottom: '1px solid #1f4a87'
        }

        const experiencePosition = {
            lat: this.props.booking.position.lat,
            lng: this.props.booking.position.lon
        };

        const mainBody = {
            padding: '10px'
        }

        return (
            <div style={bookingRow}>

                <Card
                    title={this.props.booking.title}
                    style={tileStyle}
                    headStyle={headStyle}
                    bodyStyle={bodyStyle}
                    hoverable={true}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Map center={experiencePosition} zoom={13} style={mapStyle} zoomControl={false} attributionControl={false}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={experiencePosition}>
                        </Marker>
                    </Map>
                    <div style={mainBody}>{this.props.booking.description}</div>
                    
                </Card>
            </div>
        );
    }
}

export default BookingCard;