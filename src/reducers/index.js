import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers, createStore } from 'redux';
 

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,

})

export default allReducers;