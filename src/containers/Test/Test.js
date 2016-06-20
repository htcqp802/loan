import React,{Component} from 'react';

export default class Test extends Component{
    render(){
        const style = require('./Test.scss');
        return(
            <div className={style.test}>
                I'm test page;
            </div>
        )
    }
}
