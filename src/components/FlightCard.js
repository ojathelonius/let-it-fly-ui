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

        const currentWeather = this.props.isFetchingWeather ? 'Fetching data...' :
            (<p>It's currently {this.props.weather.temperature} degrees in {this.props.weather.city}, although it feels more like {this.props.weather.feelsLikeTemperature}.</p>)


        return (
            <Card
                title="Flight to Paris"
                style={tileStyle}
                headStyle={headStyle}
                bodyStyle={bodyStyle}
                hoverable={true}
            >
                <h2>Weather</h2>
                {currentWeather}

            </Card>

        );
    }
}

export default FlightCard;