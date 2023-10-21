import {combineReducers} from 'redux';
import {authReducer} from './Auth';

// combine multiple reducer 
export const rootReducer = combineReducers({
  auth : authReducer,
})