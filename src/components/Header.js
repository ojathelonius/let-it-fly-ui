import React, { Component } from 'react';

class Header extends Component {
    render() {
        const headerStyle = {
            backgroundColor: '#f7f7f7',
            height: '100px',
            color: '#001b4a',
            fontFamily: 'NoTime',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px',
            textTransform: 'uppercase',
            flex: '0 0 100px'
        }
        return (
            <div style={headerStyle}>
                Let it fly
            </div>
        );
    }
}

export default Header;