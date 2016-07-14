import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
    static propTypes = {
        component:PropTypes.node,
        assets:PropTypes.object,
        store:PropTypes.object
    }
    render() {
        const {component,assets,store} = this.props;
        const content = component ? ReactDOM.renderToString(component) : '';
        return (
            <html lang="en-us">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico"/>
                {Object.keys(assets.styles).map((style, key) =>
                    <link href={assets.styles[style]} key={key} media="screen, projection"
                          rel="stylesheet" type="text/css" charSet="UTF-8"/>
                )}
            </head>
            <body>
                <div id="content" dangerouslySetInnerHTML={{__html: content}}></div>
                <script src="/ieBetter.js"></script>
                <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
                <script src={assets.javascript.main}></script>
            </body>
            </html>
        )
    }
}
