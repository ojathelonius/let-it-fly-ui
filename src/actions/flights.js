import axios from 'axios';
import config from '../config';


export const fetchFlights = (origin, destination) => (async (dispatch) => {
	dispatch(requestFlights());

	/* The Singapor Airlines API only provides flights from SIN, thus we only send the destination */
	try {
		const response = await axios({
			method: 'get',
			url: `${config.apiUrl}/destination/${destination}`
		});
		dispatch(receiveFlights(response.data));
	} catch (e) {
		console.log(e)
	}

})

export const requestFlights = () => ({
    type: 'REQUEST_FLIGHTS'
})

export const receiveFlights = (json) => {
    return ({
        type: 'RECEIVE_FLIGHTS',
        payload: json
    })
}

