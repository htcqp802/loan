import React, {Component, PropTypes} from 'react';

export default class Html extends Component {
    render() {
        return (
            <html lang="en-us">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico"/>
            </head>
            <body>
                <div id="server">hello,server world</div>
                <div id="content">hello,client world</div>
            </body>
            <script src="/dist/main.js"></script>
            </html>
        )
    }
}
