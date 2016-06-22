import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {asyncConnect} from 'redux-async-connect';
import {load} from 'redux/modules/test';

//这里是个问题,必须在顶层返回一个promise,否则服务器端不渲染,后期优化
@asyncConnect([{
    promise:()=> Promise.all([])
}])
export default class App extends Component {
    state = {
        clicked: false
    }
    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        const styles = require('./App.scss');
        const cat = require('./kitten.jpg');
        return (
            <div className={styles.app}>
                I'm App Component;
                <br/>
                <Link to="/Test" style={{color:"black"}} activeStyle={{color:"red"}}>点击进入Test页面</Link>
                <br/>
                <IndexLink to="/" style={{color:"black"}} activeStyle={{color:"red"}}>点击进入HOME页面</IndexLink>
                <br/>
                <div>{this.props.children}</div>
                <div>
                    test client side:
                    <br/>
                    <button className={styles.btn}
                            onClick={this.handleClick}>{this.state.clicked ? "clicked" : "click me"}</button>
                </div>
                <div>
                    <img src={cat} alt=""/>
                </div>
            </div>
        )
    }
}
