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
        const lld_leftimg1 = require('./lld_leftimg1.jpg');
        return (
            <div className={`${style.HomeContent} container`}>
              <div className={style.lld_nav}>
                <img src={lld_nav} className={style.lld_nav} alt="凤凰金融"/>
              </div>
              <div className={`${style.lld_con} ${style.lld_con1}`}>
                <div className={style.lld_left}>
                  <div className={style.posimgshow}>
                    <Go my="/lld/fjddetail" target="_blank">
                      <img src={lld_leftimg1} />
                    </Go>
                  </div>
                  <div className={style.leftbgshow}>
                    <p className="lup">率先入驻北京地区</p>
                    <p className="lfo">个人房产二次抵押</p>
                  </div>
                </div>
                <div className={style.lld_mid}>
                  <p className={style.mup}>
                    <Go my="/lld/fjddetail" target="_blank">
                    </Go>
                    <a href="http://local.fengjr.inc:4000/lld/fjddetail" target="_blank"></a>
                  </p>
                  <div className={style.mfjd}>
                    <ul className={`${style.midlist} clearfix`}>
                      <li><a href="javascript:;" className={style.changebg1}></a><p>最低月利率1.3%</p></li>
                      <li><a href="javascript:;" className={style.changebg2}></a><p>最快48小时到账</p></li>
                      <li><a href="javascript:;" className={style.changebg3}></a><p>最高可贷300万</p></li>
                    </ul>
                  </div>
                  <p className={style.lld_link}><a href="http://local.fengjr.inc:4000/lld/fjddetail" target="_blank" class="but">查看详情</a><a href="http://local.fengjr.inc:4000/lld/applyloan" target="_blank" class="but_link">快速申请</a></p>
                </div>
              </div>
            </div>
        )
    }
}