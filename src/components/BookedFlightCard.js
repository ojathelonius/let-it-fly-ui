import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd';



class BookedFlightCard extends Component {

    componentWillMount() {
    }

    render() {

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
        const tileStyle = {
            margin: '5px 20px',
            border: '1px solid #1f4a87',
            flex: '0 1 500px',
            color: '#1f4a87'
        }

        const bodyStyle = {
            borderTop: '1px solid #1f4a87',
            position: 'relative'
        }

        const headStyle = {
            backgroundColor: '#1f4a87',
            color: 'white'
        }

        const rowItinerary = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
            flexWrap: 'wrap'
        }

        console.log(this.props.flight);
        const itinerary = [].concat(...this.props.flight.itinerary.map(e => ['arrow', e])).slice(1);
        return (<div style={rowItinerary}>
            {itinerary.map((curFlight, index, arr) => {

                if (curFlight == 'arrow') {
                    return (<i className="fas fa-arrow-right mobile-hidden" style={{ color: '#1f4a87' }} key={curFlight.id}></i>);
                }
                return (

                    <Card
                        title={<span>{curFlight.code} - {curFlight.fromCity} to {curFlight.toCity}</span>}
                        style={tileStyle}
                        headStyle={headStyle}
                        bodyStyle={bodyStyle}
                        hoverable={true}
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
                    </Card>

                )
            })}
        </div>
        );
    }
}

export default BookedFlightCard;