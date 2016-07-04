import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {form2Validation, rightKinds} from './applyLoanValidation';
import  * as applyLoan from 'redux/modules/applyLoan';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Caculate from './Caculate';

@reduxForm({
    form: 'applyLoan',
    fields: [
        'buildings[].rightKind',       //房屋性质
        'buildings[].communityName',   //小区名
        'buildings[].buildingNumber',
        'buildings[].roomNumber',
        'buildings[].buildArea',       //面积
        'buildings[].loanBankAcc2',   //贷款余额
        'buildings[].useState',        //使用情况
        'buildings[].direction',        //房屋朝向
        'buildings[].propNo',          //产权证
        'buildings[].owner',            //姓名
        'buildings[].cardNoHouse'     //身份证
    ],
    destroyOnUnmount: false,
    validate: form2Validation
})
@connect(
    state=> ({
        loading: state.applyLoan.loading,
        data: state.applyLoan.data,
        loadError: state.applyLoan.loadError,
        result: state.applyLoan.result
    }),
    dispatch=>bindActionCreators(applyLoan, dispatch)
)

export default class ApplyLoanForm2 extends Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        invalid: PropTypes.bool,
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        loadCommunity: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        data: PropTypes.object,
        loadError: PropTypes.object,
        handleSubmit: PropTypes.func.isRequired,
        previousPage: PropTypes.func.isRequired
    }

    state = {
        caculateShow: false
    }

    componentWillMount() {
        this.props.fields.buildings.addField();
    }
    componentWillUnmount(){
        this.props.fields.buildings.removeField();
    }
    render() {
        const {
            fields:{
                buildings
            },
            loading,
            invalid,
            pristine,
            submitting,
            loadCommunity,
            previousPage,
            handleSubmit,
            result
        } = this.props;
        const style = require('./ApplyLoanForm.scss');
        const smallStyle = {width: 130, marginLeft: 20}
        return (
            <div>
                {
                    buildings.map((building, index)=>
                        <table key={index} className={index > 0 ? `${style.addMoreBg} form-table` : "form-table"} style={{margin:"auto"}}>
                            <tbody >
                            <tr>
                                <td className="required">房屋性质：</td>
                                <td>
                                    <select {...building.rightKind}>
                                        <option value="请选择">请选择</option>
                                        <option value={rightKinds[0]}>住宅</option>
                                    </select>
                                </td>
                                {building.rightKind.error && building.rightKind.touched &&
                                <td className="error">{building.rightKind.error}</td>}
                            </tr>
                            <tr>
                                <td className="required">小区名称:</td>
                                <td colSpan="2" style={{position:"relative"}}>
                                    {building.communityName.error && building.communityName.touched &&
                                    <span style={{fontSize:12,position:"absolute",top:-10}}
                                          className="error">{building.communityName.error}</span>}
                                    <div className={style.inputGroup}>
                                        <input style={{width:200}} type="text"
                                               onKeyUp={event=>loadCommunity(event.target.value)}
                                               placeholder="请输入小区名称" {...building.communityName}/>
                                        {building.communityName.active && loading &&
                                        <div className={style.prompt}>数据加载中 请稍后......</div>}

                                    </div>

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
                                <td><input type="text" className="hasUnit"
                                           placeholder="98或98.8或98.88" {...building.buildArea}/><span
                                    className="unit">m²</span>
                                </td>
                                {building.buildArea.error && building.buildArea.touched &&
                                <td className="error">{building.buildArea.error}</td>}
                            </tr>
                            <tr>
                                <td className="required">贷款余额:</td>
                                <td style={{position:"relative"}}>{building.loanBankAcc2.error && building.loanBankAcc2.touched &&
                                <span style={{fontSize:12,position:"absolute",top:-10}}
                                      className="error">{building.loanBankAcc2.error}</span>}
                                    <input type="text" className="hasUnit"
                                           value={result}  {...building.loanBankAcc2} /><span
                                        className="unit">元</span>

                                </td>
                                <td>
                                    <div className={style.caculateBtn}
                                         onClick={()=>this.setState({caculateShow:true})}></div>
                                    <Caculate show={this.state.caculateShow}
                                              close={()=>this.setState({caculateShow:false})}></Caculate>
                                </td>
                            </tr>
                            <tr>
                                <td>使用情况:</td>
                                <td>
                                    <select {...building.useState}>
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
                                    <select {...building.direction}>
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
                                    <input type="text" {...building.propNo} />
                                </td>
                            </tr>
                            <tr>
                                <td>产权人姓名:</td>
                                <td>
                                    <input type="text" {...building.owner}/>
                                </td>
                            </tr>
                            <tr>
                                <td>产权人身份证:</td>
                                <td>
                                    <input type="text" {...building.cardNoHouse} />
                                </td>
                                {building.cardNoHouse.error && building.cardNoHouse.touched &&
                                <td className="error">{building.cardNoHouse.error}</td>}
                            </tr>
                            </tbody>
                        </table>
                    )
                }
                <table className="form-table" style={{margin:"auto"}}>
                    <tbody>
                    <tr>
                        <td></td>
                        <td >
                            <button className={style.addMore} onClick={()=>buildings.addField()}></button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign:"center"}} colSpan="3">
                            <button onClick={previousPage}>上一步</button>
                            <button style={{marginLeft:30}} disabled={invalid || pristine || submitting}
                                    onClick={handleSubmit}>
                                我还能借多少
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}