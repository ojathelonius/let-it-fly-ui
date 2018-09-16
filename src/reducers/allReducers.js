import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import experiencesReducer from './experiencesReducer';
import modalReducer from './modalReducer';

const allReducers = combineReducers({
    weatherReducer,
    experiencesReducer,
    modalReducer
});

export default allReducers;
