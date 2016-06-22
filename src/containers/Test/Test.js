import React,{Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state=>({text:state.test.text})
)
export default class Test extends Component{
    componentWillMount(){
        console.log(this.props.text);
    }
    render(){
        const style = require('./Test.scss');
        return(
            <div className={style.test}>
                I'm test page;
                {this.props.text}
            </div>
        )
    }
}
