import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';

export default class App extends Component{
    state = {
        clicked:false
    }
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return (
            <div>
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
                    <button onClick={this.handleClick}>{this.state.clicked ? "clicked" : "click me"}</button>
                </div>
            </div>
        )
    }
}
