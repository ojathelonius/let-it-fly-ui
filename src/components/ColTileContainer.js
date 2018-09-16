import React, { Component } from 'react';

class ColTileContainer extends Component {
    render() {

        const tileContainer = {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#00266b',
            boxShadow: 'inset 0px 11px 8px -10px black, inset 0px -11px 8px -10px black',
            alignItems: 'center'
        }

        return (
            <div style={tileContainer}>
                {this.props.children}
            </div>

        );
    }
}

export default ColTileContainer;