import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import {Go} from 'components';
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
                    <ul className="container">
                        <li><i className={style.bg}></i><Go main="/">首页</Go></li>
                        <li><i className={style.bg}></i><Go main="/financing">理财</Go><i className={style.arrow}></i></li>
                        <li><i className={style.bg}></i><Go main="/zc">众筹</Go></li>
                        <li><i className={style.bg}></i><Go main="/lld">融资</Go><i className={style.arrow}></i></li>
                        <li><i className={style.bg}></i><Go main="/aboutus/jianjie">关于凤凰金融/About Us</Go></li>
                        <li><i className={style.bg}></i><Go main="/safety">安全保障</Go></li>
                        <li><i className={style.bg}></i><Go main="/service/jr">帮助中心</Go></li>
                        <li className={style.right}><i className={style.bg}></i><Go mall="/" target="_blank" >积分商城</Go></li>
                    </ul>
                </nav>
            </div>
        )
    }
}