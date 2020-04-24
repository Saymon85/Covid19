import { combineReducers } from 'redux';
import global from './global';
import country from './country';
import history from './history';


const rootReducer = combineReducers({ global, country, history });


export default rootReducer;