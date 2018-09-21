import React, { Component } from 'react';
import { Card, Button, Icon } from 'antd';

class FlightCard extends Component {

    render() {
        const tileStyle = {
            margin: '5px 20px',
            border: '1px solid #fcb130',
            flex: '0 1 500px'
        }

        const bodyStyle = {
            borderTop: '1px solid #fcb130',
            position: 'relative'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }

        const rowItinerary = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            flexWrap: 'wrap'
        }

        // const currentWeather = this.props.isFetchingWeather ? 'Fetching data...' :
        //     (<p>It's currently {this.props.weather.temperature} degrees in {this.props.weather.city}, although it feels more like {this.props.weather.feelsLikeTemperature}.</p>)

        const itinerary = [].concat(...this.props.flight.itinerary.map(e => ['arrow', e])).slice(1);

        const iconStyle = {
            fontSize: '18px',
            width: '40px',
            textAlign: 'center'
        }

        const iconContainer = {
            display: 'flex',
            alignItems: 'center'
        }

        const mainContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '15px'
        }

        const titleStyle = {
            color: 'white',
            fontSize: '16px',
            marginBottom: '5px',
            textAlign: 'center'
        }

        const infoBtnStyle = {
            position: 'absolute',
            bottom: '5px',
            right: '5px',
            backgroundColor: '#fcb130',
            color: '#00266b',
            border: '1px solid #fcb130',
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
            marginTop: '10px',
            width: '200px',
            cursor: 'pointer',
        }

        return (
            <div style={mainContainer}>
                {(itinerary.length) > 1 ? (
                    <span style={titleStyle}>Stay in <span style={{ fontWeight: 'bold' }}>{itinerary[0].toCity}</span> and reach your destination in <span style={{ fontWeight: 'bold' }}>{this.props.flight.timeInBetween}</span>.</span>
                ) : (
                        <span style={titleStyle}>Take a straight flight to {itinerary[0].toCity} and you'll be there in <span style={{ fontWeight: 'bold' }}>{itinerary[0].duration}</span> !</span>
                    )}

                <div style={rowItinerary}>
                    {itinerary.map((curFlight, index, arr) => {

                        if (curFlight == 'arrow') {
                            return (<i className="fas fa-arrow-right mobile-hidden" style={{ color: 'white' }} key={curFlight.id}></i>);
                        }
                        return (

                            <Card
                                title={<span>{curFlight.code} - {curFlight.fromCity} to {curFlight.toCity}</span>}
                                style={tileStyle}
                                headStyle={headStyle}
                                bodyStyle={bodyStyle}
                                key={curFlight.id}
                            >


                                <div style={iconContainer}>
                                    <i className="far fa-calendar" style={iconStyle}></i>{curFlight.departureDate}
                                </div>
                                <div style={iconContainer}>
                                    <i className="far fa-clock" style={iconStyle}></i>{curFlight.departureTime} ({curFlight.duration})
                                </div>
                                <div style={iconContainer}>
                                    <i className="fas fa-plane" style={iconStyle}></i>{curFlight.airline}
                                </div>

                                <Button type="primary" style={infoBtnStyle} >
                                    <Icon type="info-circle" />More info
                                </Button>
                            </Card>

                        )
                    })}
                </div>
                <div style={bookBtnStyle}  onClick={() => this.props.openFlightModal(this.props.flight)}><i className="fas fa-plane-departure" style={iconStyle}></i>Book this flight</div>
            </div>
        );

    }
}

export default FlightCard;