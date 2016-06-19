/**
 * 注册babel
 */
var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: .babelrc. 转JSON错误');
    console.error(err);
}

require('babel-register')(config);
