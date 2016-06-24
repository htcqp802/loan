import React,{Component,PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux'
import {load} from 'redux/modules/slider';

@asyncConnect([{
    promise:({store:{dispatch}})=>{
        return dispatch(load());
    }
}])
@connect(
    state=>({sliders:state.slider.data})
)
export default class Slider extends Component{
    static propTypes  = {
        sliders:PropTypes.array
    }
    render(){
        console.log(this.props.sliders)
        return (

            <div>Im slider</div>
        )
    }
}