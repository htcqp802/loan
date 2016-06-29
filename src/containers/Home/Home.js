import React,{Component,PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import {Slider,HomeContent} from 'components';
import {load} from 'redux/modules/slider';

@asyncConnect([{
    promise:({store:{dispatch}})=>{
        return dispatch(load());
    }
}])
@connect(
    state=>({sliders: state.slider.data})
)
export default class Home extends Component{
    static propTypes = {
        sliders:PropTypes.array
    }
    render(){
        const style = require("./Home.scss");
        const {sliders} = this.props;
        return (
            <div className={style.home}>
                <Slider>
                    {
                        sliders.map((slider,key)=>{
                            return <item key={key} href={slider.imageUrl} atl={slider.title} src={slider.uri}></item>
                        })
                    }
                </Slider>
                Im Index

            </div>
        )
    }
}
