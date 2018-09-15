import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '0 0 60px'
        }
        return (
            <div style={footerStyle}>
                <div>Footer</div>
            </div>
        );
    }
}

export default Footer;