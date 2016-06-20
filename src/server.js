import Express from 'express';
import http from 'http';
import httpProxy from 'http-proxy';
import compression from 'compression';
import favicon from 'serve-favicon';
import config from './config';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './helpers/Html';

const app = new Express();
const server = new http.Server(app);
const targetUrl = 'http://'+config.apiHost+':'+config.apiPort;

/**
 * 配置代理
 * ws 是否使用websocket
 */
const proxy = httpProxy.createProxyServer({
    target: targetUrl,
    ws: false
});

//启用文件压缩
app.use(compression());
//配置ico
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
//配置静态文件
app.use(Express.static(path.join(__dirname, '..', 'static')));
//配置代理地址
app.use('/api', (req, res) => proxy.web(req, res, {target: targetUrl}));

/**
 * 渲染页面
 */
app.use((req,res)=>{
    res.status(200);
    res.send('<!doctype html>\n' +
        ReactDOM.renderToString(<Html />));
})

/**
 * 启动服务
 */
server.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info('----\n==> ✅  %s 已经启动,api地址 %s.', config.app.title, targetUrl);
    console.info('==> 💻  node地址 http://%s:%s', config.host, config.port);
});

