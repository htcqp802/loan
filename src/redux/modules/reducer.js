import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as form} from 'redux-form';
import slider from './slider';
import applyLoan from './applyLoan';

export default combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    form,
    slider,
    applyLoan
})
