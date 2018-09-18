import axios from 'axios';
import config from '../config';

export const fetchExperiences = (airportCode, tag) => (async (dispatch) => {
    dispatch(requestExperiences());
    try {
        const response = await axios({
            method: 'get',
            url: `${config.apiUrl}/experiences`,
            params: {
                airport: airportCode,
                tag: tag
            }
        });
        dispatch(receiveExperiences(response.data));
    } catch(e) {
        console.log(e)
    }
});

export const requestExperiences = () => ({
    type: 'REQUEST_EXPERIENCES'
})

export const receiveExperiences = (json) => {
    return ({
        type: 'RECEIVE_EXPERIENCES',
        payload: json
    })
}

