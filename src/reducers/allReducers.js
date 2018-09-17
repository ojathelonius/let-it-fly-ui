import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import experiencesReducer from './experiencesReducer';
import modalReducer from './modalReducer';
import bookingsReducer from './bookingsReducer';

const allReducers = combineReducers({
    weatherReducer,
    experiencesReducer,
    modalReducer,
    bookingsReducer
});

export default allReducers;
