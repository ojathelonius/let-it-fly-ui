import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import experiencesReducer from './experiencesReducer';
import modalReducer from './modalReducer';
import bookingsReducer from './bookingsReducer';
import flightsReducer from './flightsReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
    weatherReducer,
    experiencesReducer,
    modalReducer,
    bookingsReducer,
    flightsReducer,
    userReducer
});

export default allReducers;
