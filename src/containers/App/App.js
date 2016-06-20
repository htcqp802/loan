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
                    <button className={styles.btn} onClick={this.handleClick}>{this.state.clicked ? "clicked" : "click me"}</button>
                </div>
                <div>
                    <img src={cat} alt=""/>
                </div>
            </div>
        )
    }
}
