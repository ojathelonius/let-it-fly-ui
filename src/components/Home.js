import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import RowTileContainer from './RowTileContainer';
import flightImg from '../assets/images/flight-img.jpg';
import entertainmentImg from '../assets/images/entertainment-img.jpg';
import hotelImg from '../assets/images/hotel-img.jpg';

class Home extends Component {
    render() {
        const homeStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }

        const explanationStyle = {
            fontSize: '16px',
            margin: '10px',
            textAlign: 'center',
            width: '80%',
            display: 'flex',
            flexDirection: 'column'
        }

        const mediumFont = {
            fontSize: '18px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
        }

        const tileStyle = {
            margin: '20px',
            border: '1px solid #fcb130',
        }

        const bodyStyle = {
            padding: 0,
            borderTop: '1px solid #fcb130'
        }

        const headStyle = {
            backgroundColor: '#fcb130'
        }

        const paragraphStyle = {
            marginBottom: '5px'
        }
        const iconRow = {
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '20px'
        }

        const iconCol = {
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 250px',
            alignItems: 'center',
            textAlign: 'center'
        }

        const iconStyle = {
            fontSize: '50px',
            marginBottom: '15px'
        }

        const iconSubtitle = {
            fontSize: '16px',
            marginBottom: '10px'
        }

        return (
            <div style={homeStyle}>
                <div style={explanationStyle}>
                    <span style={paragraphStyle}><strong>Let it fly</strong> allows you to decide precisely what you would like to do during this overbooking situation.</span>
                    <span style={paragraphStyle}>Schedule your <strong>next flight</strong>, book <strong>entertaining experiences</strong> and <strong>relax at the best hotels nearby</strong>, we got you !</span>
                </div>
                <div style={iconRow}>
                    <div style={iconCol}>
                        <i className="fas fa-plane-departure" style={iconStyle}></i>
                        <span style={iconSubtitle}>In a hurry ? Find alternative flights towards your initial destination.</span>
                    </div>
                    <div style={iconCol}>
                        <i className="fas fa-umbrella-beach" style={iconStyle}></i>
                        <span style={iconSubtitle}>Extend your vacation and enjoy custom picked sources of fun !</span>
                    </div>
                    <div style={iconCol}>
                        <i className="fas fa-bed" style={iconStyle}></i>
                        <span style={iconSubtitle}>Staying overnight ? Find the best hotels in the area.</span>
                    </div>
                </div>

                <RowTileContainer>
                    <Link to="/flights">
                        <Card
                            title="Hitch-hike a flight"
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >
                            <img src={flightImg} alt="Hitch-hike a flight" style={{ maxWidth: '100%' }} />
                        </Card>
                    </Link>
                    <Link to="/experiences">
                        <Card
                            title="Extend your stay"
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >
                            <img src={entertainmentImg} alt="Extend your stay" style={{ maxWidth: '100%' }} />
                        </Card>
                    </Link>
                    <Link to="/hotels">
                        <Card
                            title="Find accommodation"
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >
                            <img src={hotelImg} alt="Find accommodation" style={{ maxWidth: '100%' }} />
                        </Card>
                    </Link>
                </RowTileContainer>
            </div >
        );
    }
}

export default Home;