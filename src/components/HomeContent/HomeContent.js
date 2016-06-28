import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Go} from 'components';


/**
 * 后期根据需求进行再次拆分
 */
export default class HomeContent extends Component {
    render() {
        const style = require('./HomeContent.scss');
        const lldNav = require('./lld_nav.jpg');
        const lldLeftimg1 = require('./lld_leftimg1.jpg');
        return (
            <div className={`${style.HomeContent} container`}>
              <div className={style.lld_nav}>
                <img src={lldNav} className={style.lldNav} alt="凤凰金融"/>
              </div>
              <div className={`${style.lld_con} ${style.lld_con1}`}>
                <div className={style.lld_left}>
                  <div className={style.posimgshow}>
                    <Go my="/lld/fjddetail" target="_blank">
                      <img src={lldLeftimg1} />
                    </Go>
                  </div>
                  <div className={style.leftbgshow}>
                    <p className={style.lup}>率先入驻北京地区</p>
                    <p className={style.lfo}>个人房产二次抵押</p>
                  </div>
                </div>
                <div className={style.lld_mid}>
                  <p className={style.mup}>
                    <Go my="/lld/fjddetail" target="_blank">
                    </Go>
                  </p>
                  <div className={style.mfjd}>
                    <ul className={`${style.midlist} clearfix`}>
                      <li>
                        <a href="javascript:;" className={style.changebg1}></a>
                        <p>最低月利率1.3%</p>
                      </li>
                      <li>
                        <a href="javascript:;" className={style.changebg2}></a>
                        <p>最快48小时到账</p>
                      </li>
                      <li>
                        <a href="javascript:;" className={style.changebg3}></a>
                        <p>最高可贷300万</p>
                      </li>
                    </ul>
                  </div>
                  <p className={style.lld_link} >
                    <Go my="/lld/fjddetail" target="_blank" className={style.but}>
                      查看详情
                    </Go>
                    <Go my="/lld/applyloan" target="_blank" className={style.but_link}>
                      快速申请
                    </Go>
                  </p>
                </div>
              </div>
            </div>
        )
    }
}