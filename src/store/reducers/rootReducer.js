import { combineReducers } from 'redux';
import global from './global';
import country from './country';


const rootReducer = combineReducers({ global, country });


export default rootReducer;