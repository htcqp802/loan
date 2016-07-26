var partials = [
    'menu'
];

var path = require('path');
var antdLessPath = require('./antdLessPath');

function addImportReturnDependency(loader, config, propertyName) {
    var fileNameResolved;
    var fileName = config[propertyName];
    if(fileName && fileName.length > 0){
        fileNameResolved = path.relative(loader.context,fileName);
        return '@import "'+fileNameResolved+'";\n';
    }
}

module.exports = function (content) {
    var source;

    //读取格式化配置
    var config = this.exec(content,this.resourcePath);
    var pathToAntdLess = antdLessPath.getPath(this.context);
    //配置文件相对antd/lib路径
    var relativePathToAntdLess = path.relative(this.context,pathToAntdLess);
    var start = '';
    this.cacheable(true);
    start += '@import "'+ path.join(relativePathToAntdLess,'style/themes/default.less') +'";\n';
    //引入自定义变量
    // if(config.preAntdCustomizations){
    //     start += addImportReturnDependency(this,config,'preAntdCustomizations');
    // }
    start += '@import "'+ path.join(relativePathToAntdLess,'style/core/iconfont.less') +'";\n';
    source = start + partials.filter(function(partial){
            return config.styles[partial];
        }).map(function (partial) {
            return '@import "'+ path.join(relativePathToAntdLess,partial,'style/index.less') +'";'
        }).join('\n');

    //替换默认样式
    if (config.mainLess) {
        source += '\n' + addImportReturnDependency(this, config, 'mainLess');
    }
    source = source.replace(/\\/g, '/');
    return source;
}