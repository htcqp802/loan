import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {form1Validation} from './applyLoanValidation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as applyLoan from 'redux/modules/applyLoan';

@reduxForm({
    form: 'applyLoan',
    fields: ['houseAvailable', 'moneyBorrow', 'loanPeriod'],
    validate: form1Validation
})

@connect(
    ()=>({}),
    dispatch=>bindActionCreators(applyLoan, dispatch)
)
export default class ApplyLoanForm1 extends Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        invalid: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        values: PropTypes.object.isRequired
    }

    render() {
        const {
            invalid,
            pristine,
            submitting,
            fields:{moneyBorrow, loanPeriod, houseAvailable},
            setStep
        } = this.props;
        return (
            <table className="form-table">
                <tbody>
                <tr>
                    <td className="required">抵押房产位于北京六环内：</td>
                    <td>
                        <input type="radio" {...houseAvailable} value="yes" checked={houseAvailable.value === "yes"}/>是
                        <input type="radio" {...houseAvailable} value="no" checked={houseAvailable.value === "no"}/>否
                    </td>
                    {houseAvailable.error && houseAvailable.touched && <td>{houseAvailable.error}</td>}
                </tr>
                <tr>
                    <td>您的姓名:</td>
                    <td><input type="text" disabled/></td>
                </tr>
                <tr>
                    <td className="required">融资金融:</td>
                    <td><input type="text" {...moneyBorrow} className="hasUnit" placeholder="20-300"/><span
                        className="unit">万元</span>
                    </td>
                    {moneyBorrow.error && moneyBorrow.touched && <td>{moneyBorrow.error}</td>}
                </tr>
                <tr>
                    <td className="required">融资期限:</td>
                    <td><input type="text" {...loanPeriod} className="hasUnit" placeholder="1-12"/><span
                        className="unit">个月</span>
                    </td>
                    {loanPeriod.error && loanPeriod.touched && <td>{loanPeriod.error}</td>}
                </tr>
                <tr>
                    <td>还款方式:</td>
                    <td>先息后本</td>
                </tr>
                <tr>
                    <td>月利息范围:</td>
                    <td>
                        <span className="orange">1.3%-2%</span>（实际利率以线下评估为准）
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button disabled={invalid || pristine || submitting} onClick={()=>setStep(2)}>
                            确认以上信息去评估借款额度
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}