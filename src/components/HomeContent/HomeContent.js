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
        const lldLeftimg2 = require('./lld_leftimg2.jpg');
        const lldMore = require('./lld_more.jpg');

        const lldCcorpZjt = require('./lld_corp_zjt.jpg');
        const lldCorpGgdyd = require('./lld_corp_gdyd.jpg');
        const lldCorpBxzl = require('./lld_corp_bxzl.jpg');
        const lldCorpWhxy = require('./lld_corp_whxy.jpg');
        return (
            <div className={style.HomeContent}>
              <div className={`${style.lld_nav} container`}>
                <img src={lldNav} className={style.lldNav} alt="凤凰金融"/>
              </div>
              <div className={`${style.lld_con} ${style.lld_con1} container`}>
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
              <div className={`${style.lld_con} ${style.lld_con2} container`}>
                <div className={style.lld_left}>
                  <div className={style.posimgshow}>
                    <a href="http://local.fengjr.inc:4000/lld/fqddetail/" target="_blank">
                      <img src={lldLeftimg2} />
                    </a>
                  </div>
                  <div className={style.leftbgshow}>
                    <p className={style.lup}>&nbsp;</p>
                    <p className={style.lfo}>企业经营周转</p>
                  </div>
                </div>
                <div className={style.lld_mid}>
                  <p className={`${style.mup} ${style.mtup}`}>
                    <a href="http://local.fengjr.inc:4000/lld/fqddetail/" target="_blank"></a>
                  </p>
                  <div className={style.mfqd}>
                    <ul className={`${style.midlist} clearfix`}>
                      <li>
                        <a href="javascript:;" className={style.changebg6}></a>
                        <p>最低综合成本年化11%</p>
                      </li>
                      <li>
                        <a href="javascript:;" className={style.changebg5}></a>
                        <p>在线申请仅3步</p>
                      </li>
                      <li>
                        <a href="javascript:;" className={style.changebg4}></a>
                        <p>灵活融资方案</p>
                      </li>
                    </ul>
                  </div>
                  <p className={style.lld_link}>
                    <a href="http://local.fengjr.inc:4000/lld/fqddetail/" target="_blank" className={style.but}>查看详情</a>
                    <a href="http://local.fengjr.inc:4000/lld/applyfqd/" target="_blank" className={style.but_link}>快速申请</a>
                  </p>
                </div>
            </div>
              <div className={`${style.lld_con3} container`}>
                <img src={lldMore}/>
              </div>
              <p className={`${style.link_more} container`}></p>
              <div className={style.lld_corp}>
                <div className={style.corp_con}>
                  <h2>融资审核金融服务机构</h2>
                  <ul className={`${style.corplist} clearfix`}>
                    <li>
                      <a href="http://local.fengjr.inc:4000/financing/zjt" target="_blank">
                        <img src={lldCcorpZjt} alt="凤凰金融"/>
                        <div className={style.imgbox} style={{opacity: 0}}></div>
                        <span className={style.detail} style={{display: 'none',opacity: 1}}>专题介绍</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://local.fengjr.inc:4000/financing/gdyd" target="_blank">
                        <img src={lldCorpGgdyd} alt="凤凰金融"/>
                        <div className={style.imgbox_sha} style={{opacity: 0}}></div>
                        <span className={style.detail} style={{display: 'none'}}>专题介绍</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://local.fengjr.inc:4000/financing/bxzl" target="_blank">
                        <img src={lldCorpBxzl} alt="凤凰金融"/>
                        <div className={style.imgbox_sha}></div>
                        <span className={style.detail}>专题介绍</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://local.fengjr.inc:4000/financing/whxy" target="_blank">
                        <img src={lldCorpWhxy} alt="凤凰金融"/>
                        <div className={style.imgbox_sha}></div>
                        <span className={style.detail}>专题介绍</span>
                      </a>
                    </li>
                  </ul>
                  <p className={style.morecorp}>更多优质金融服务机构正在入驻中……</p>
                </div>
              </div>
          </div>
        )
    }
}