import React,{Component} from 'react';
import {Slider,HomeContent} from 'components';
export default class Home extends Component{
    render(){
        const style = require("./Home.scss");
        return (
            <div className={style.home}>
              <Slider></Slider>
              <HomeContent></HomeContent>
            </div>
        )
    }
}
