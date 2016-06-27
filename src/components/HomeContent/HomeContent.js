import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Go} from 'components';


/**
 * 后期根据需求进行再次拆分
 */
export default class HomeContent extends Component {
    render() {
        const style = require('./HomeContent.scss');
        const lld_nav = require('./lld_nav.jpg');
        return (
            <div className={`${style.HomeContent} container`}>
              <div className={style.HomeContent}>
                <img src={lld_nav} className={style.lld_nav} alt="凤凰金融"/>
              </div>
            </div>
        )
    }
}