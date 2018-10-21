import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flex: '0 0 60px',
            backgroundColor: '#bbb39f',
            color: '#443f33'
        }
        return (
            <div style={footerStyle}>
                <div> <a href="https://appchallenge.singaporeair.com/en/challenges/appchallenge-2018" title="Singapore Airlines App Challenge"> Singapore Airlines AppChallenge</a></div>
                <div>See repo on <a href="https://github.com/ojathelonius/let-it-fly-ui" title="GitHub repo"> <i className="fab fa-github"></i> GitHub</a></div>
            </div>
        );
    }
}

export default Footer;