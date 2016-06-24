import React from 'react';
import {IndexRoute,Route} from 'react-router';
import {App,Home,NotFound} from 'containers';


export default ()=>{
    return (
        <Route>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
            </Route>
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    )
}
