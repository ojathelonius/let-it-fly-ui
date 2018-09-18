import React, { Component } from 'react';
import { Card } from 'antd';

class FlightCard extends Component {

    render() {
        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
            width: '500px'
        }

        const bodyStyle = {
            borderTop: '1px solid #fcb130'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }

        const rowItinerary = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        const currentWeather = this.props.isFetchingWeather ? 'Fetching data...' :
            (<p>It's currently {this.props.weather.temperature} degrees in {this.props.weather.city}, although it feels more like {this.props.weather.feelsLikeTemperature}.</p>)


        return (
            <div style={rowItinerary}>
                {this.props.flight.itinerary.map((curFlight, index, arr) => {
                    const arrow = (arr.length -1 === index) ?
                    '' 
                    : (<i class="fas fa-arrow-right"></i>);

                    return (
                        <Card
                            title={<span>{curFlight.code} - {curFlight.fromCity} to {curFlight.toCity}</span>}
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >
                        </Card>

                    )
                })}
            </div>
        );

    }
}

export default FlightCard;