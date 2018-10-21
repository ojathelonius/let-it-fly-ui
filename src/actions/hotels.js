import axios from 'axios';
import config from '../config';

export const fetchHotels = (airportCode) => (async (dispatch) => {
    dispatch(requestHotels());
    try {
        const response = await axios({
            method: 'get',
            url: `${config.apiUrl}/hotels/${airportCode}`,
        });
        dispatch(receiveHotels(response.data));
    } catch(e) {
        console.log(e)
    }
});

export const requestHotels = () => ({
    type: 'REQUEST_HOTELS'
})

export const receiveHotels = (json) => {
    return ({
        type: 'RECEIVE_HOTELS',
        payload: json
    })
}

export const approved = (index) => {
    return ({
        type: 'APPROVED',
        payload: index
    })
}

