// base configuration
const settings = {
  web: {
    host: '0.0.0.0',
    port: 4010
  },
  api: {
    host: 'http://www.fengjr.inc',
    port: 4010 // port暂时未用
  },
  domains: {
    "domain": "fengjr.inc",
    "main": "http://test3.fengjr.inc",
    "my": "http://mytest3.fengjr.inc",
    "pay": "http://paytest3.fengjr.inc",
    "bx": "http://bx.fengjr.inc",
    "mall": "http://mall.fengjr.inc"
  },
  system_id: 'bx',
  source: 'pc',
  workers: 8 // 进程个数
};

// CDN configuration
const staticPrefix = {
  img: [ //图片
    '//img0.fengjr.com/public/dist/', // 双斜杠开头会自动判断 http/https
    '//img1.fengjr.com/public/dist/',
    '//img2.fengjr.com/public/dist/',
    '//img3.fengjr.com/public/dist/',
    '//img4.fengjr.com/public/dist/'
  ],
  font: '//font.fengjr.com/public/dist/',
  js: '//js.fengjr.com/public/dist/',
  css: '//css.fengjr.com/public/dist/',
  'static': '//static.fengjr.com/public/dist/' // fallback

};

settings.web.port = (process.env.PORT | 0) || 4009;


module.exports = {
  staticPrefix: staticPrefix,
  domains: settings.domains,
  "distDir": false,
  api: settings.api,
  web: settings.web,
  system_id: settings.system_id,
  source: settings.source,
  workers: settings.workers // 进程个数
}

