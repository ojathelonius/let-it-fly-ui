import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import RowTileContainer from './RowTileContainer';
import flightImg from '../assets/images/flight-img.jpg';
import entertainmentImg from '../assets/images/entertainment-img.jpg';

class Home extends Component {
    render() {
        const homeStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
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

        return (
            <div style={homeStyle}>
                <div style={largeFont}>We are sorry that you cannot make it on board...</div>
                <div style={mediumFont}>Please let us work together on this issue by selecting an option below.</div>
                <RowTileContainer>
                    <Link to="/flights">
                        <Card
                            title="Hitch-hike a flight"
                            style={tileStyle}
                            headStyle={headStyle}
                            bodyStyle={bodyStyle}
                            hoverable={true}
                        >
                            <img src={flightImg} alt="Hitch-hike a flight" />
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
                            <img src={entertainmentImg} alt="Extend your stay" />
                        </Card>
                    </Link>
                </RowTileContainer>
            </div>
        );
    }
}

export default Home;