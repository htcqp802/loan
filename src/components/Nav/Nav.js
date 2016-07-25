import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Affix from 'antd/lib/Affix';
import {Go} from 'components';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Nav extends Component {
    render() {
        const _style = require('./Nav.less');
        return (
            <Affix style={{zIndex:999}}>
                <div  className={_style.NavHead}>
                    <Menu mode="horizontal" className="container">
                        <span className={_style.phone}>客服电话：400 076 1166</span>
                    </Menu>
                </div>
                <div  className={_style.NavBody}>
                    <Menu mode="horizontal" className="container">

                    </Menu>
                </div>
            </Affix>
        )

    }
}