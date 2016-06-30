import React, {Component} from 'react';
import {IndexLink,Link} from 'react-router';
import {Go} from 'components';


/**
 * 后期根据需求进行再次拆分
 */
export default class Nav extends Component {
    render() {
        const style = require('./Nav.scss');
        const logo = require('./logo.png');
        const ewm = require('./img_ewm.png');
        return (
            <div className={style.nav}>
                <div className={`${style.head} container`}>
                    <div className={style.pullLeft}>
                        <IndexLink to="/">
                            <img src={logo} className={style.logo} alt="凤凰金融"/>
                        </IndexLink>
                    </div>
                    <ul className={style.pullRight}>
                        <li className={style.getApp}><Go main="/"><i className={style.icon}></i>下载APP <img src={ewm}
                                                                                                           alt=""/></Go>
                        </li>
                        <li ><Go my="/login">登录</Go></li>
                        <li className={style.getEnvelope}><Go my="/register"><i className={style.icon}></i>注册领红包</Go>
                        </li>
                    </ul>
                </div>

                <nav>
                    <ul className={`${style.navbar} container`}>
                        <li><i className={style.bg}></i><Go main="/">首页</Go></li>
                        <li style={{width:"130px"}} ><i className={style.bg}></i><Go main="/financing">理财<i className={`${style.arrow} fa`}></i></Go>
                            <ul className={`${style.dropdown} ${style.l4}`}>
                                <li><i className={style.bg}></i><Go bx="/current" target="_blank">活期理财<span
                                    className={style.yellow}>New</span></Go></li>
                                <li><i className={style.bg}></i><Go main="/financing" target="_blank">定期理财</Go></li>
                                <li><i className={style.bg}></i><Go bx="/" target="_blank">保险理财</Go></li>
                                <li><i className={style.bg}></i><Go main="/financing/list?type=newUser" target="_blank">新手专享</Go>
                                </li>
                            </ul>
                        </li>
                        <li><i  className={style.bg} ></i><Go main="/zc">众筹</Go></li>
                        <li><i style={{height:"40px"}} className={style.bg}></i><Link to="/">融资<i className={`${style.arrow} fa`}></i></Link>
                            <ul className={`${style.dropdown} ${style.l2}`}>
                                <li><i className={style.bg}></i><Go main="/lld/fqddetail" target="_blank">凤企贷</Go></li>
                                <li><i className={style.bg}></i><Link to="/fjdDetail">凤加贷</Link></li>
                            </ul>
                        </li>
                        <li><i className={style.bg}></i><Go main="/aboutus/jianjie">关于凤凰金融/About Us</Go></li>
                        <li style={{width:"156px"}}><i className={style.bg}></i><Go main="/safety">安全保障<i
                            className={`${style.arrow} fa`}></i></Go>
                            <ul className={`${style.dropdown} ${style.l2}`}>
                                <li><i className={style.bg}></i><Go main="/safety" target="_blank">安全保障措施</Go></li>
                                <li><i className={style.bg}></i><Go main="/financing/jgdetail" target="_blank">保障机构介绍</Go></li>
                            </ul>
                        </li>
                        <li><i className={style.bg}></i><Go main="/service/jr">帮助中心</Go></li>
                        <li className={style.right}><i className={style.bg}></i><Go mall="/" target="_blank">积分商城</Go>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}