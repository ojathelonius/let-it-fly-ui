import React, { Component } from 'react';

class RowTileContainer extends Component {
    render() {

        const tileContainer = {
            display: 'flex',
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#e4e4e4',
            boxShadow: 'inset 0px 11px 8px -10px black, inset 0px -11px 8px -10px black'
        }

        return (
            <div style={tileContainer}>
                {this.props.children}
            </div>

        );
    }
}

export default RowTileContainer;