import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App,Home,Test} from 'containers';
export default ()=>{
    return (
        <Route>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/test" component={Test}></Route>
            </Route>
        </Route>
    )
}
