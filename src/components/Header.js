import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singaporeLogo from '../assets/images/logo-singapore.png';


class Header extends Component {
    render() {
        const headerContainerStyle = {
            color: '#424242',
            fontFamily: 'NoTime',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '50px',
            textTransform: 'uppercase',
            flexDirection: 'row',
            marginTop: '25px'
        }

        const logoContainerStyle = {
            display: 'flex',
            flexDirection: 'column', 
            color: '#424242'
        };

        const logoStyle = {
            height: '100px'
        };

        const sideMenuStyle = {
            flex: 1,
            height: '80px',
            fontFamily: 'Bebas, sans-serif',
            fontSize: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const sideMenuStyleLeft = {
            ...sideMenuStyle,
            backgroundImage: 'linear-gradient(to right, #9E917E , #f7f7f7)'
        }

        const sideMenuStyleRight = {
            ...sideMenuStyle,
            backgroundImage: 'linear-gradient(to left, #9E917E , #f7f7f7)'
        }

        const menuHeaderStyle = {
            fontSize: '25px'
        }

        const headerIconStyle = {
            marginRight: '10px'
        }

        const headerLink = {
            display: 'flex',
            alignItems: 'center'
        }

        return (<div style={headerContainerStyle}>
            <div style={sideMenuStyleLeft}><Link to="/profile" style={headerLink}><i className="fas fa-user" style={headerIconStyle}></i><span style={menuHeaderStyle} className='mobile-hidden'>View my profile</span></Link></div>
            <Link to="/">
                <div style={logoContainerStyle}>
                    <img src={singaporeLogo} style={logoStyle} alt="Logo Singapore Airlines" />
                    Let it fly
            </div>
            </Link >
            <div style={sideMenuStyleRight}><Link to="/bookings" style={headerLink}><i className="fas fa-box-open" style={headerIconStyle}></i><span style={menuHeaderStyle} className='mobile-hidden'>Check my bookings</span></Link></div>
        </div >

        );
    }
}

export default Header;