import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';

export default class Html extends Component {
    static propTypes = {
        component:PropTypes.node,
        assets:PropTypes.object
    }
    render() {
        const {component,assets} = this.props;
        const content = component ? ReactDOM.renderToString(component) : '';
        return (
            <html lang="en-us">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico"/>
                {Object.keys(assets.styles).map((style, key) =>
                    <link href={assets.styles[style]} key={key} media="screen, projection"
                          rel="stylesheet" type="text/css" charSet="UTF-8"/>
                )}
            </head>
            <body>
                <div id="content" dangerouslySetInnerHTML={{__html: content}}></div>
            </body>
            <script src={assets.javascript.main} charSet="UTF-8"/>
            </html>
        )
    }
}
