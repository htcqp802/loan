import React from 'react';
import {IndexRoute,Route} from 'react-router';
import {App,Home,NotFound,ApplyLoan,fjdDetail} from 'containers';


//应该使用动态路由 按需打包 后期优化
export default ()=>{
    return (
        <Route>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="applyloan" component={ApplyLoan}></Route>
                <Route path="fjdDetail" component={fjdDetail}></Route>
            </Route>
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    )
}
