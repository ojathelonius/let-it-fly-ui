import axios from 'axios';


export const fetchWeather = (airportCode) => (async (dispatch) => {
    dispatch(requestWeather);
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.johanet.fr/api/weather/${airportCode}`
        });
        dispatch(receiveWeather(response.data));
    } catch(e) {
        console.log(e)
    }
});

export const requestWeather = () => ({
    type: 'REQUEST_WEATHER'
})

export const receiveWeather = (json) => {
    return ({
        type: 'RECEIVE_WEATHER',
        payload: json
    })
}

