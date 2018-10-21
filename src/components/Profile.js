import React, { Component } from 'react';
import { Spin, List, Menu, Dropdown, Icon } from 'antd';

class Profile extends Component {

    componentWillMount() {
        this.props.updateProfile(this.props.demoProfile);
    }

    onClickDropDown = ({ key }) => {
        this.props.changeProfile(key);
    };

    createDropDown = () => {
        if (this.props.listAllProfiles != null){
            const table = this.props.listAllProfiles.map((profile) => {
                if (profile[0].id == this.props.demoProfile){
                    return (<Menu.Item disabled key={profile[0].id}>{profile[0].firstName + " " + profile[0].lastName}</Menu.Item>)
                }
                else{
                    return (<Menu.Item key={profile[0].id}><a href="#">{profile[0].firstName + " " + profile[0].lastName}</a></Menu.Item>)
                }     
            })
            return table
        }
        return []
    }

    render() {

        const spinIcon = <Icon type="loading" style={{ fontSize: 22, color: '#424242' }} spin />;

        const menu = (
            <Menu onClick={this.onClickDropDown}>
              {this.createDropDown()}
            </Menu>
          );

        const mainContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            flex: 1
        }

        const profileElement = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px'
        }

        const iconStyle = {
            marginRight: '15px',
            fontSize: '18px'
        }

        const mainTitle = {
            fontSize: '22px',
            marginBottom: '25px',
            textAlign: 'center'
        }

        const textStyle = {
            fontSize: '15px',
            flex: '0 1 400px'
        }

        const hrStyle = {
            width: '30%',
            border: '1px solid #e8e8e8',
            margin: '10px 0px'
        }

        const generalInfo = {
            fontSize: '15px',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center'
        }

        const userForm = {

        }

        const listStyle = {
            width: '100%',
            maxWidth: '400px'
        }

        const disclaimer = {
            padding: '10px',
            backgroundColor: '#e2e2e2',
            border: '1px solid #cccaca',
            borderRadius: '4px',
            margin: '15px 0px',
            width: '100%',
            maxWidth: '400px',
            color: '#1f4a87'
        }

        const disclaimerIcon = {
            color: '#1f4a87',
            fontSize: '16px',
            marginRight: '6px'
        }

        const dropdownStyle = {
            padding: '6px 12px',
            backgroundColor: '#white',
            color: 'black',
            borderRadius: '3px',
            marginBottom: '20px'
        }

        if (this.props.isFetchingProfile || !this.props.profile) {
            return (<div style={mainContainer}><Spin indicator={spinIcon}/></div>);
        }


        return (
            <div style={mainContainer}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#"  style={dropdownStyle}>
                        Change profile <Icon type="down" />
                    </a>
                </Dropdown>
                <div style={mainTitle}>Here's what we know about your situation.</div>
                <div style={generalInfo}>
                    Your initial flight is headed to <strong>{this.props.profile.goingTo}</strong> ({this.props.profile.goingToAirport}).
                </div>
                <div style={generalInfo}>
                    {this.props.profile.adjacentBookings != 0 ? (
                        <span>You're traveling with {this.props.profile.adjacentBookings} other people.</span>
                    ) : (
                            <span>You're traveling by yourself.</span>
                        )}
                </div>
                <hr style={hrStyle} />
                <div style={userForm}>
                    <div style={profileElement}>
                        <i className="fas fa-user" style={iconStyle}></i>
                        <span style={textStyle}>{this.props.profile.firstName} {this.props.profile.lastName}</span>
                    </div>
                    <div style={profileElement}>
                        <i className="far fa-envelope" style={iconStyle}></i>
                        <span style={textStyle}>{this.props.profile.email}</span>
                    </div>
                    <div style={profileElement}>
                        <i className="fas fa-birthday-cake" style={iconStyle}></i>
                        <span style={textStyle}>{this.props.profile.dateOfBirth}</span>
                    </div>
                    <div style={profileElement}>
                        <i className="fas fa-home" style={iconStyle}></i>
                        <span style={textStyle}>{this.props.profile.address[0].line1}</span>
                    </div>
                    <div style={profileElement}>
                        <i className={this.props.profile.businessTrip ? "fas fa-briefcase" : "fas fa-user-friends"} style={iconStyle}></i>
                        <span style={textStyle}>{this.props.profile.businessTrip ? "Traveling for work" : "Traveling with family"}</span>
                    </div>
                </div>
                <hr style={hrStyle} />
                <div style={{ marginBottom: '10px' }}>KrisShop orders : </div>
                <List
                    size="large"
                    bordered
                    dataSource={this.props.profile.krisShopOrders}
                    renderItem={order => (<List.Item>{order.orderNo ? order.orderNo : 'Missing order number'} ({order.orderDate})</List.Item>)}
                    style={listStyle}
                />

                <div style={disclaimer}>
                <i className="fas fa-info-circle" style={disclaimerIcon}></i>
                    Based on your flight information, your personal information as well as your purchase record,
                     we are able to provide you with the best suggestions regarding entertainment and accommodation.
                </div>
            </div>
        );

    }
}

export default Profile;