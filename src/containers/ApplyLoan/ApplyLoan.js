import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {ApplyLoanForm1} from 'components';
import {connect} from 'react-redux';

@connect(
    state=>({step: state.applyLoan.step})
)
export default class ApplyLoan extends Component {

    static propTypes = {
        step: PropTypes.number.isRequired
    }

    render() {
        const style = require('./ApplyLoan.scss');
        const {step} = this.props;
        return (
            <div className={style.applyLoan}>
                <ul className={style.path}>
                    <li><Link to="/">理理贷</Link></li>
                    <li>></li>
                    <li><Link to="/fqddetail">凤加贷</Link></li>
                    <li>></li>
                    <li>借款申请</li>
                </ul>
                <div className={style.panel}>
                        <div style={{display:step === 1 ? "block" : "none"}}>
                            <div className={style.step1}></div>
                            <div className={style.content}>
                                <div className={style.title+" "+style.center}>欢迎您选择<span
                                    className={style.orange}>凤加贷</span>，让我们先了解一下您的需求吧！
                                </div>
                                <p className={style.center}>北京地区凤加贷申请由中金投集团提供线下审核服务</p>
                                <div className={style.navCondition}>
                                    <span className={style.first}>房产位于北京六环内</span>
                                    <span className={style.second}>房屋产权人全部满足18-58岁</span>
                                    <span className={style.third}>一抵为银行且房贷逾期不超过1次</span>
                                </div>
                                <ApplyLoanForm1 onSubmit={this.handleSubmit}></ApplyLoanForm1>
                            </div>
                        </div>
                        <div style={{display:step === 2 ? "block" : "none"}}>
                            <div className={style.step2}></div>
                        </div>
                </div>
            </div>
        )
    }
}