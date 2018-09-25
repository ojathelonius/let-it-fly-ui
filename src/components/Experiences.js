import React, { Component } from 'react';
import { Spin, Modal, Button } from 'antd';
import RowTileContainer from './RowTileContainer';
import ExperienceCardContainer from '../containers/ExperienceCardContainer';
import { Map, TileLayer, Marker } from 'react-leaflet'

class Experiences extends Component {

    componentWillMount() {
        /* Singapor airport for demo purposes */
        this.props.updateExperiences('SIN');
        this.props.updateProfile(this.props.defaultDemoProfile);
    }

    render() {
        const experiencesStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }

        const largeFont = {
            fontSize: '20px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
        }

        const mediumFont = {
            fontSize: '18px',
            margin: '10px 10px 0px 10px',
            textAlign: 'center'
        }

        const filteredExperienceList = (this.props.userProfile && this.props.userProfile.businessTrip) ? this.props.experiences.filter(exp =>
            (exp.tag === 'luxury')
        ) : this.props.experiences.filter(exp =>
            (exp.tag !== 'luxury')
        );

        const experienceDisplay =  filteredExperienceList.map(experience => <ExperienceCardContainer experience={experience} key={experience.id} />)

        const mapStyle = {
            height: '300px',
            marginBottom: '20px'
        }

        const experiencePosition = this.props.experienceModal ?
            {
                lat: this.props.selectedExperience.position.lat,
                lng: this.props.selectedExperience.position.lon
            } :
            {
                lat: 0,
                lng: 0
            };

        const buttonContainerStyle = {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
        }

        return (
            <div style={experiencesStyle}>
                <div style={largeFont}>

                    {this.props.userProfile ? (
                        this.props.userProfile.businessTrip ?
                            (<span>As you're travelling for business purposes, here are some entertaining activities to relax between work sessions.</span>)
                            : (<span>Below are some entertaining activities for you to enjoy while waiting for your next flight.</span>)
                    ) :
                        (
                            <div>Finding experiences based on your information...</div>
                        )
                    }

                </div>

                    {
                        (!this.props.userProfile) ? 
                        (<Spin size="large" style={{marginTop: '30px'}}/>)
                        : (<RowTileContainer>
                            {experienceDisplay}
                        </RowTileContainer>)
                    }

                <Modal
                    title={this.props.selectedExperience.title}
                    visible={this.props.experienceModal}
                    centered
                    footer={null}
                    onCancel={() => this.props.closeExperienceModal()}
                >
                    <p>{this.props.selectedExperience.description}</p>
                    <h2>Location</h2>
                    <Map center={experiencePosition} zoom={13} style={mapStyle} zoomControl={false} attributionControl={false}>
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={experiencePosition}>
                        </Marker>
                    </Map>
                    <h2>Informations</h2>
                    <div>From {this.props.selectedExperience.startingAt} to {this.props.selectedExperience.endingAt}</div>
                    <div>{this.props.selectedExperience.requirements ? this.props.selectedExperience.requirements : null}</div>

                    <div style={buttonContainerStyle}>
                        <Button type="primary" size='large' style={{ backgroundColor: '#1f4a87' }} onClick={() => this.props.bookExperience(this.props.selectedExperience)}>Book</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Experiences;