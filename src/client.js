import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import getRoutes from './routes';
const dest = document.getElementById('content');

ReactDOM.render(
    <Router history={browserHistory} routes={getRoutes()}></Router>,
    dest
)

if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger
}
