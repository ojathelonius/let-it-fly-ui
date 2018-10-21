import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singaporeLogo from '../assets/images/logo-singapore.png';


class Header extends Component {
    render() {
        const headerContainerStyle = {
            backgroundColor: '#f7f7f7',
            color: '#1f4a87',
            fontFamily: 'NoTime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px',
            textTransform: 'uppercase',
            flexDirection: 'row',
            marginTop: '25px'
        }

        const logoContainerStyle = {
            display: 'flex',
            flexDirection: 'column'
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
            backgroundImage: 'linear-gradient(to right, #fcb130 , #f7f7f7)'
        }

        const sideMenuStyleRight = {
            ...sideMenuStyle,
            backgroundImage: 'linear-gradient(to left, #fcb130 , #f7f7f7)'
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
            <Link to="/">
                <div style={logoContainerStyle}>
                    <img src={singaporeLogo} style={logoStyle} alt="Logo Singapore Airlines" />
                    Let it fly
            </div>
            </Link >
            </div >

        );
    }
}

export default Header;