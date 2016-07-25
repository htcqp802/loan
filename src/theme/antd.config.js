const antdConfig = {
    mainLess: './src/theme/antd.config.less',
    styles: {
        menu: true
    }

};
const ExtractTextPlugin = require('extract-text-webpack-plugin');
antdConfig.styleLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader');
module.exports = antdConfig;

