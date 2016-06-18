import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const dest = document.getElementById('content');

ReactDOM.render(
    <div>hello,client world</div>,
    dest
)

if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger
}
