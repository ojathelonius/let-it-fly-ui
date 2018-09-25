import axios from 'axios';
import config from '../config';
import { resetBookings } from './bookings';

export const fetchProfile = (id) => (async (dispatch) => {
    dispatch(requestProfile());
    try {
        const response = await axios({
            method: 'get',
            url: `${config.apiUrl}/profile`
        });
        const pro = response.data.filter(x => x.id == id)[0];
        const allPro = response.data.map(x => [{"firstName":x.firstName, "lastName":x.lastName, "id":x.id}]);
        let out = {};
        out.profile = pro;
        out.allProfiles = allPro;
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
