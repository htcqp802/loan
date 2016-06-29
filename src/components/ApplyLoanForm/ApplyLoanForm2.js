import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
    form: 'applyLoan',
    fields: ['houseAvailable', 'amount', 'lifeTime'],
    validate: form2Validation
})

export default class ApplyLoanForm2 extends Component {
    render() {
        return (
            <table className="form-table">
                <tbody>
                <tr>
                    <td className="required">房屋性质：</td>
                    <td>
                        <select>
                            <option value="请选择">请选择</option>
                            <option value="SHANG_PING_FANG">住宅</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="required">小区名称:</td>
                    <td><input type="text" placeholder="请输入小区名称"/></td>
                    <td>
                        <select>
                            <option value="请输入楼号">请输入楼号</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option value="请输入门牌号">请输入门牌号</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="required">建筑面积:</td>
                    <td><input type="text" className="hasUnit" placeholder="98或98.8或98.88"/><span className="unit">m²</span>
                    </td>
                </tr>
                <tr>
                    <td className="required">贷款余额:</td>
                    <td><input type="text" className="hasUnit"/><span className="unit">元</span>
                    </td>
                </tr>
                <tr>
                    <td>使用情况:</td>
                    <td>
                        <select>
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
                        <select>
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>产权证号:</td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>产权人姓名:</td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>产权人身份证:</td>
                    <td>
                        <input type="text"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button onClick={()=>setStep(1)}>上一步</button>
                        <button disabled={invalid || pristine || submitting} onClick={()=>setStep(2)}>
                            我还能借多少
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}