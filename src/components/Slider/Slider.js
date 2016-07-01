import React, {Component, PropTypes} from 'react';
import Item from './Item';

export default class Slider extends Component {
    static propTypes = {
        children: PropTypes.array
    }

    static defaultProps = {
        height: 320,
        width: '100%',
        tickTime: 3000
    }

    state = {
        active: 0
    }

    componentDidMount() {
        this.startInterval();
    }

    startInterval(){
        this.interval = setInterval(()=> {
            this.setState({
                active: this.state.active < this.props.children.length - 1 ? this.state.active + 1 : 0
            })
        }, this.props.tickTime);
    }
    stopInterval(){
        clearInterval(this.interval);
    }
    componentWillUnmount(){
        this.stopInterval();
    }
    render() {
        const style = require('./Slider.scss');
        const sliders = this.props.children;
        const {width, height} = this.props;
        return (
            <div style={{width:width,height:height,top:-1}}  className={style.slider}>
                <ul className={style.sliderWraper}>
                    {
                        sliders.map((item, index)=> {
                            const slider = item.props;
                            return <Item slider={slider} width="100%" height={height}
                                         opacity={index === 0 ? 1 : 0} show={this.state.active === index}
                                         key={index}/>
                        })
                    }
                </ul>
                <ul className={style.sliderPoint}>
                    {
                        sliders.map((item, index)=> {
                            return <li key={index} className={this.state.active === index ? style.active : ""}><a
                                onClick={()=>{
                                this.stopInterval();
                                this.setState({active:index});
                                this.startInterval();
                            }}
                                target="_blank"></a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}