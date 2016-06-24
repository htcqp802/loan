import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {Nav,Foot,HomeContent} from 'components';

//这里是个问题,必须在顶层返回一个promise,否则服务器端不渲染,后期优化
@asyncConnect([{
    promise:()=> Promise.all([])
}])
export default class App extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <HomeContent></HomeContent>
                <div>{this.props.children}</div>
                <Foot></Foot>
            </div>
        )
    }
}
