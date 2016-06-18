var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
    debug: false,
    webpack_assets_file_path: 'webpack-assets.json',
    assets: {
        images: {
            extensions: [
                'jpeg',
                'jpg',
                'png',
                'gif'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        fonts: {
            extensions: [
                'woff',
                'woff2',
                'ttf',
                'eot'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        svg: {
            extension: 'svg',
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        }
    }
}
