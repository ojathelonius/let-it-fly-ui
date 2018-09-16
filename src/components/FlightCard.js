import React, { Component } from 'react';
import { Card } from 'antd';

class FlightCard extends Component {

    componentWillMount() {
        this.props.updateWeather(this.props.airportCode);
    }

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
        console.log(this.props.weather);

        const currentWeather = this.props.weather.currentWeather ? this.props.weather.currentWeather : 'Loading current weather...';
        return (
            <Card
                title="Flight to Paris"
                style={tileStyle}
                headStyle={headStyle}
                bodyStyle={bodyStyle}
                hoverable={true}
            >
            <p>It's currently {currentWeather.temperature} degrees in {currentWeather.location}, although it feels more like {currentWeather.feelsLikeTemperature}.</p>
            </Card>

        );
    }
}

export default FlightCard;