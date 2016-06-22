import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createMiddleware from './middleware/clientMiddleware';

export default function createStore(history,client,data){
    //将路由actions 同步到history
    const reduxRouterMiddleware = routerMiddleware(history);
    const middleware = [createMiddleware(client),reduxRouterMiddleware];
    let finalCreateStore;
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const reducer = require('./modules/reducer');
    //createStore接受3个参数 1.reducer(means to do something) 2.初始化数据(e.g. session)
    //第三个参数就是中间件,就是上面的applyMiddleware
    const store = finalCreateStore(reducer,data);
    return store;
}
