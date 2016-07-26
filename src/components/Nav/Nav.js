import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Affix from 'antd/lib/affix';
import {Go} from 'components';
import {connect} from 'react-redux';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

@connect(state=>({
    user: state.auth.user,
    userInfo: state.userInfo.data
}))
export default class Nav extends Component {
    render() {
        const _style = require('./Nav.less');
        const logo = require('./logo.png');
        const imgUer = require('./head_user.png');
        const imgApp = require('./download_app.jpg');
        const imgWechat = require('./top_bar_weixing.jpg')

        const {user, userInfo} = this.props;
        const mumbers = (obj)=>
        obj > 0 &&
        <span className="right-info">{obj.toFixed(2)}元</span>;

        const numbers = (obj, text) =>
        obj > 0 &&
        <span className="right-info-orange"><span className="num">{obj}</span>{text ? text : '待使用'}</span>

        return (
            <div className="nav">
                <div className={_style.NavHead}>
                    <div className="container">
                        <div className={_style.phone}>
                            客服电话：400 076 1166
                        </div>
                        <Menu mode="horizontal" className="nav-head">
                            {!user &&
                            <MenuItem>
                                <Go my="/login">立即登录</Go>
                            </MenuItem>}
                            {!user &&
                            <MenuItem>
                                <Go my="/register">快速注册</Go>
                            </MenuItem>
                            }
                            {user &&
                            <MenuItem>
                                <Go style={{borderRight:0,paddingRight:0}} my="/account">{user.loginName}</Go>
                            </MenuItem>}
                            {user &&
                            <MenuItem>
                                <Go main="/logout">退出</Go>
                            </MenuItem>
                            }
                            <SubMenu key="safety"
                                     title={<Go main="/safety">安全保障 <i className="fa fa-angle-down"></i></Go>}>
                                <MenuItem>
                                    <Go main="/safety">安全保障措施</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go main="/financing/jgdetail">保障机构介绍</Go>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem>
                                <Go main="/aboutus/jianjie">关于我们</Go>
                            </MenuItem>
                            <MenuItem>
                                <Go main="/service/jr">帮助中心</Go>
                            </MenuItem>
                            <SubMenu className="sub-menu-img" title={<Go main="/specialTopic/fengapp">下载APP</Go>}>
                                <MenuItem>
                                    <img src={imgApp} alt=""/>
                                    <span>凤凰金融APP</span>
                                </MenuItem>
                            </SubMenu>
                            <MenuItem>
                                <a style={{padding:'0 10px',borderRight:0}} href="http://weibo.com/fenghuangjinrong"
                                   target="_blank">
                                    <span className="fa fa-weibo"></span>
                                </a>
                            </MenuItem>
                            <SubMenu  className="sub-menu-img"
                                title={<a style={{padding:'0 10px',borderRight:0}}><span className="fa fa-wechat"></span></a>}>
                                <MenuItem>
                                    <div>
                                        <img src={imgWechat} alt=""/>
                                        凤凰金融微信
                                    </div>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
                <Affix >
                    <div className={_style.NavBody}>
                        <div className="container">
                            <div className={_style.logo}>
                                <Go main="/">
                                    <img src={logo} alt="凤凰金融"/>
                                </Go>
                            </div>
                            <Menu mode="horizontal" className="nav-body">

                                <MenuItem>
                                    <Go main="/">首页</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go main="/financing/list?type=newUser">新手区</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go main="/financing/list?type=newUser">新手区</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go main="/current">活期理财</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go bx="/">保险理财</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go main="/zc">众筹</Go>
                                </MenuItem>
                                <MenuItem>
                                    <Go mall="/">积分商城</Go>
                                </MenuItem>
                                {!user &&
                                <MenuItem style={{paddingRight:0}}>
                                    <Go my="/register" className={_style.redEnvelopeBtn}><i
                                        className={_style.redEnvelopeIcon}></i><span>注册领红包</span></Go>
                                </MenuItem>
                                }
                                {user &&
                                <SubMenu key="myAccount" className="menu-btn"
                                         title={<Go my="/account"><i className="fa fa-circle"></i><img src={imgUer} alt=""/><span>我的账户</span><i className="fa fa-angle-down"></i></Go>}>
                                    <MenuItem key="account">
                                        <Go my="/account">
                                            <span>资产总览</span>
                                            {mumbers(userInfo.totalAsset)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="currentbx">
                                        <Go my="/account/currentbx">
                                            <span>活期理财</span>
                                            {mumbers(userInfo.aztec.asset)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="invest">
                                        <Go my="/account/invest">
                                            <span>定期理财</span>
                                            {mumbers(userInfo.regular.asset)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="bx">
                                        <Go my="/account/bx">
                                            <span>保险理财</span>
                                            {mumbers(userInfo.insurance.asset)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="zc">
                                        <Go my="/account/zc">
                                            <span>我的众筹</span>
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="jifen">
                                        <Go my="/account/jifen">
                                            <span>我的积分</span>
                                            {mumbers(userInfo.point.points)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="bonus">
                                        <Go my="/account/bonus">
                                            <span>我的红包</span>
                                            {numbers(userInfo.count.availableCouponCount)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="jiaxi">
                                        <Go my="/account/jiaxi">
                                            <span>我的加息券</span>
                                            {numbers(userInfo.count.interestTicketCount)}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="invite">
                                        <Go my="/account/invite">
                                            <span>邀请好友</span>
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="cardVoucher">
                                        <Go my="/account/cardVoucher">
                                            <span>兑换卡卷</span>
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="message">
                                        <Go my="/account/message">
                                            <span>站内消息</span>
                                            {numbers(userInfo.count.unreadMsgCount, '条未读')}
                                        </Go>
                                    </MenuItem>
                                    <MenuItem key="logout" className="last">
                                        <Go main="/logout">
                                            安全退出
                                        </Go>
                                    </MenuItem>
                                </SubMenu>
                                }

                            </Menu>
                        </div>
                    </div>
                </Affix>
            </div>
        )

    }
}