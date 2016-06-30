import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {form2Validation, rightKinds} from './applyLoanValidation';
import  * as applyLoan from 'redux/modules/applyLoan';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

@reduxForm({
    form: 'applyLoan',
    fields: [
        'rightKind',       //房屋性质
        'communityName',   //小区名
        'buildingNumber',
        'roomNumber',
        'buildArea',       //面积
        'loanBankAcc2',   //贷款余额
        'useState',        //使用情况
        'direction',        //房屋朝向
        'propNo',          //产权证
        'owner',            //姓名
        'cardNoHouse'     //身份证
    ],
    validate: form2Validation
})
@connect(()=> ({}),
    dispatch=>bindActionCreators(applyLoan,dispatch)
)

export default class ApplyLoanForm2 extends Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        invalid: PropTypes.bool,
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        setStep: PropTypes.func.isRequired,
        loadCommunity:PropTypes.func.isRequired
    }


    render() {
        const {
            setStep,
            fields:{
                rightKind,
                communityName,
                buildArea,
                loanBankAcc2,
                useState,
                direction,
                propNo,
                owner,
                cardNoHouse
            },
            invalid,
            pristine,
            submitting,
            loadCommunity
        } = this.props;
        const smallStyle = {width: 130,marginLeft:20}
        return (
            <table className="form-table" style={{margin:"auto"}}>
                <tbody>
                <tr>
                    <td className="required">房屋性质：</td>
                    <td>
                        <select {...rightKind}>
                            <option value="请选择">请选择</option>
                            <option value={rightKinds[0]}>住宅</option>
                        </select>
                    </td>
                    {rightKind.error && rightKind.touched && <td className="error">{rightKind.error}</td>}
                </tr>
                <tr>
                    <td className="required">小区名称:</td>
                    <td colSpan="2" style={{position:"relative"}}>
                        {communityName.error && communityName.touched && <span style={{fontSize:12,position:"absolute",top:-10}} className="error">{communityName.error}</span>}
                        <input style={{width:200}} type="text" onKeyUp={event=>loadCommunity(event.target.value)} placeholder="请输入小区名称" {...communityName}/>
                        <select style={smallStyle}>
                            <option value="请输入楼号">请输入楼号</option>
                        </select>
                        <select style={smallStyle}>
                            <option value="请输入门牌号">请输入门牌号</option>
                        </select>
                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td className="required">建筑面积:</td>
                    <td><input type="text" className="hasUnit" placeholder="98或98.8或98.88" {...buildArea}/><span
                        className="unit">m²</span>
                    </td>
                    {buildArea.error && buildArea.touched && <td className="error">{buildArea.error}</td>}
                </tr>
                <tr>
                    <td className="required">贷款余额:</td>
                    <td><input type="text" className="hasUnit" {...loanBankAcc2} /><span className="unit">元</span>
                    </td>
                    {loanBankAcc2.error && loanBankAcc2.touched && <td className="error">{loanBankAcc2.error}</td>}
                </tr>
                <tr>
                    <td>使用情况:</td>
                    <td>
                        <select {...useState}>
                            <option value="请选择">请选择</option>
                            <option value="USE">自用</option>
                            <option value="LEASE">租赁</option>
                            <option value="VACANT">空置</option>
                            <option value="OTHER">其他</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>房屋朝向:</td>
                    <td>
                        <select {...direction}>
                            <option value="请选择">请选择</option>
                            <option value="SOUTH_NORTH">南北向</option>
                            <option value="EAST_WEST">东西向</option>
                            <option value="SOUTH_DIRE">正南全阳</option>
                            <option value="EAST">东向</option>
                            <option value="WEST">西向</option>
                            <option value="EAST_SOUTH">东南</option>
                            <option value="WEST_SOUTH">西南</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>产权证号:</td>
                    <td>
                        <input type="text" {...propNo} />
                    </td>
                </tr>
                <tr>
                    <td>产权人姓名:</td>
                    <td>
                        <input type="text" {...owner}/>
                    </td>
                </tr>
                <tr>
                    <td>产权人身份证:</td>
                    <td>
                        <input type="text" {...cardNoHouse} />
                    </td>
                    {cardNoHouse.error && cardNoHouse.touched && <td className="error">{cardNoHouse.error}</td>}
                </tr>
                <tr>
                    <td style={{textAlign:"center"}} colSpan="3">
                        <button onClick={()=>setStep(1)}>上一步</button>
                        <button style={{marginLeft:30}} disabled={invalid || pristine || submitting} onClick={()=>setStep(2)}>
                            我还能借多少
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}