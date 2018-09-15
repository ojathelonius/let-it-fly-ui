import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '0 0 60px',
            backgroundColor: '#fcb130',
            color: '#00266b'
        }
        return (
            <div style={footerStyle}>
                <div>Footer</div>
            </div>
        );
    }
}

export default Footer;