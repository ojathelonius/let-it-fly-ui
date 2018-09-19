import React, { Component } from 'react';
import { Card } from 'antd';

class FlightCard extends Component {

    render() {
        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
            flex: '0 1 500px'
        }

        const bodyStyle = {
            borderTop: '1px solid #fcb130'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }

        const rowItinerary = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'inset 0 0 4px #000000',
            margin: '10px',
            width: '95%',
            flexWrap: 'wrap'
        }

        const currentWeather = this.props.isFetchingWeather ? 'Fetching data...' :
            (<p>It's currently {this.props.weather.temperature} degrees in {this.props.weather.city}, although it feels more like {this.props.weather.feelsLikeTemperature}.</p>)

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

        return (
            <div style={rowItinerary}>
                {itinerary.map((curFlight, index, arr) => {

                    if (curFlight == 'arrow') {
                        return (<i className="fas fa-arrow-right mobile-hidden" style={{ color: 'white' }}></i>);
                    }
                    return (

                        <Card
                            title={<span>{curFlight.code} - {curFlight.fromCity} to {curFlight.toCity}</span>}
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >


                            <div style={iconContainer}>
                                <i class="far fa-calendar" style={iconStyle}></i>{curFlight.departureDate}
                            </div>
                            <div style={iconContainer}> 
                                <i class="far fa-clock" style={iconStyle}></i>{curFlight.departureTime} ({curFlight.duration})
                            </div>
                            <div style={iconContainer}>
                                <i class="fas fa-plane" style={iconStyle}></i>{curFlight.airline}
                            </div>

                        </Card>

                    )
                })}
            </div>
        );

    }
}

export default FlightCard;