import React, { Component } from 'react';
import ListItem from './ListItem';
import ListItem2 from './ListItem2';
import data from './../list.js'
import Graphique from './Graphique';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class Dashboard extends Component {

    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }


    render() {

        const mainContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: '20px',
            flex: 1
        }

        const listing = {
            flex: 7,
            marginRight: "70px"
        }

        const pie = {
            flex: 3
        }

        const flight = {
            position: "absolute",
            top: "50px",
            left: "50px",
            fontSize: "1.4em",
            border: "2px solid",
            padding: "10px"
        }

        const ll = data.response.passengerList.map((item, index) => 
        <ListItem key={index} item={item} v={this.props.vol.includes(index)}/>)

        const ll2 = this.props.vol.map((item, index) => 
        <ListItem2 key={index} item={data.response.passengerList[item]} index={index} approved={this.props.approvedd} />)

        const ll3 = this.props.app.map((item, index) => 
        <ListItem key={index} item={data.response.passengerList[item]} />)

        return (
            <div style={mainContainer}>  
                <div style={flight}>
                    Flight SG890 - {9-this.props.app.length} volunteers needed    
                </div>      
                <div style={listing}>

                

                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                    <Tab>All passengers</Tab>
                    <Tab>Volunteers</Tab>
                    <Tab>Approved volunteers</Tab>
                    </TabList>
                    <TabPanel>{ll}</TabPanel>
                    <TabPanel>{ll2}</TabPanel>
                    <TabPanel>{ll3}</TabPanel>
                </Tabs>

                </div>
                <div style={pie}>
                <Graphique 
                /> 
                </div>
            </div>
        );

    }
}

export default Dashboard;