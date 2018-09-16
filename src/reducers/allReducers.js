import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const allReducers = combineReducers({
    weatherReducer
});

export default allReducers;
