import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singaporeLogo from '../assets/images/logo-singapore.png';


class Header extends Component {
    render() {
        const headerStyle = {
            backgroundColor: '#f7f7f7',
            color: '#1f4a87',
            fontFamily: 'NoTime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px',
            textTransform: 'uppercase',
            flexDirection: 'column',
            marginTop: '25px'
        }

        const logoStyle = {
            height: '100px'
        };
        return (<Link to="/">
            <div style={headerStyle}>
                <img src={singaporeLogo} style={logoStyle} alt="Logo Singapore Airlines" />
                Let it fly
            </div>
            </Link>

        );
    }
}

export default Header;