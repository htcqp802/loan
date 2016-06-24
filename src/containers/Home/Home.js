import React, {Component} from 'react';
import {Slider} from 'components';




export default class Home extends Component {
    render() {
        const style = require("./Home.scss");
        return (
            <div className={style.home}>
                <Slider></Slider>
            </div>
        )
    }
}
