import React, { Component } from 'react';
import { connect } from 'react-redux'
import {PieChart} from 'react-easy-chart';

class Graphiquee extends Component {

    render() {

        const mainContainer = {
            position: "fixed"
        }

        const pie = {
            width: "200px",
            height: "200px"
        }


        return (
            <div style={mainContainer}>    
            <ul class="legende">
                <li><span class="carree vol"></span> Approved Volunteers</li>
                <li><span class="carree nonvol"></span> Volunteers</li>
                <li><span class="carree nonseen"></span> Other passengers</li>
            </ul>    
            <PieChart
            labels
            data={[
            {key: (this.props.vol.length>0)?this.props.vol.length:'', value: this.props.vol.length, color: '#e3a51aa1'},
            {key: (this.props.app.length>0)?this.props.app.length:'', value: this.props.app.length, color: '#fcb130'},
            {key: 57 - this.props.app.length - this.props.vol.length, value: 57 - this.props.app.length - this.props.vol.length, color: '#c8c8c8'}
            ]}
            innerHoleSize={200}
            styles={{
                  fontSize: '2em',
                  fill: '#fff'
              }}
            />
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => ({
    vol : state.hotelsReducer.vol, 
    app: state.hotelsReducer.approved,
});

const mapDispatchToProps = (dispatch) => ({
});

const Graphique = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graphiquee);

export default Graphique;