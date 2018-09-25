import axios from 'axios';
import config from '../config';

export const fetchProfile = (id) => (async (dispatch) => {
    dispatch(requestProfile());
    try {
        const response = await axios({
            method: 'get',
            url: `${config.apiUrl}/profile/${id}`
        });
        dispatch(receiveProfile(response.data));
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

