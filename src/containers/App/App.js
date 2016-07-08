import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {Nav, Foot} from 'components';
import {load as loadInfo, isLoaded as isLoadedUesrInfo} from 'redux/modules/userInfo';
import {load as loadAuth, isLoaded as isLoadedAuth} from 'redux/modules/auth';

@asyncConnect([{
    promise: ({store:{getState, dispatch}})=> {
        const promises = [];
        if (!isLoadedAuth(getState())) {
            promises.push(dispatch(loadAuth()));
        }
        if(!isLoadedUesrInfo(getState())){
            promises.push(dispatch(loadInfo()));

        }
        return Promise.all(promises);
    }
}])
export default class App extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="clearFix">{this.props.children}</div>
                <Foot></Foot>
            </div>
        )
    }
}
