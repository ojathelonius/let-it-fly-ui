import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import experiencesReducer from './experiencesReducer';
import modalReducer from './modalReducer';
import bookingsReducer from './bookingsReducer';
import flightsReducer from './flightsReducer';
import userReducer from './userReducer';
import hotelsReducer from './hotelsReducer';

const allReducers = combineReducers({
    weatherReducer,
    experiencesReducer,
    modalReducer,
    bookingsReducer,
    flightsReducer,
    userReducer,
    hotelsReducer
});

export default allReducers;
