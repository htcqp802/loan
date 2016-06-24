import React,{Component} from 'react';
export default class Home extends Component{

    render(){
        const style = require("./Home.scss");
        return (
            <div className={style.home}>
                <Slider></Slider>
                Im Index

            </div>
        )
    }
}
