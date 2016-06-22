import React,{Component} from 'react';
import {connect} from 'react-redux';
import {load} from 'redux/modules/test';

import {asyncConnect} from 'redux-async-connect';
@asyncConnect([{
    promise:({store:{dispatch}})=>{
        return dispatch(load());
    }
}])
@connect(
    state=>({images:state.test.data})
)
export default class Home extends Component{

    render(){
        const style = require("./Home.scss");
        const {images} = this.props;
        console.log(images);
        return (
            <div className={style.home}>
                I'm home page;
                <ul>
                    {images.map((image)=>{
                        return <li><img src={image.uri} alt=""/></li>
                    })}
                </ul>
            </div>
        )
    }
}
