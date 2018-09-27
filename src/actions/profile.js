import axios from 'axios';
import config from '../config';
import { resetBookings } from './bookings';

export const fetchProfile = (id) => (async (dispatch) => {
    dispatch(requestProfile());
    try {

        let out = {};


        let proResponse = await axios({
            method: 'get',
            url: `${config.apiUrl}/profile/${id}`
        });
        out.profile =  proResponse.data;

        let allProResponse = await axios({
            method: 'get',
            url: `${config.apiUrl}/profile`
        });

        out.allProfiles = allProResponse.data.map(x => [{"firstName":x.firstName, "lastName":x.lastName, "id":x.id}]);
        out.profileId = id;

        dispatch(receiveProfile(out));
    } catch(e) {
        console.log(e)
    }
});

export const requestProfile = () => ({
    type: 'REQUEST_PROFILE'
})

export const receiveProfile = (json) => {
    return ({
        type: 'RECEIVE_PROFILE',
        payload: json
    })
}

export const changeProfile = (id) => (async (dispatch) => {
    dispatch(resetBookings());

    dispatch(fetchProfile(id));
});
