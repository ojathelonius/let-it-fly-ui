import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import experiencesReducer from './experiencesReducer';

const allReducers = combineReducers({
    weatherReducer,
    experiencesReducer
});

export default allReducers;
