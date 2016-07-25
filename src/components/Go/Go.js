import React, {Component} from 'react';
import {domains} from 'config';

/**
 * 用这种方式跳转组件间联系太密 后期可以考虑使用minx方式
 *
 * 依赖config
 * 调用时传入的参数名对应domains中的对象名
 * 比如跳转主站首页
 * <GO main="/">首页</GO>
 */
export default class Go extends Component {
    state = {
        to: null
    }

    componentWillMount() {
        let url;
        let redir_url = encodeURIComponent(Base64.toBase64(window.location.href));
        for (const key in this.props) {
            if (domains[key]) {
                url = domains[key] + this.props[key]+"?redirect="+redir_url;
            }
        }
        this.setState({to: url});
    }

    render() {
        const {children,to,...rest} = this.props;
        return (
            <a href={this.state.to} {...rest}>{this.props.children}</a>
        )
    }
}