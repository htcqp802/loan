import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Affix from 'antd/lib/Affix';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Nav extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="container">
                <Menu.Item key="mail">
                    <Icon type="mail"/>导航一
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
                    <MenuItemGroup title="分组1">
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="分组2">
                        <Menu.Item key="setting:3">选项3</Menu.Item>
                        <Menu.Item key="setting:4">选项4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
                </Menu.Item>
            </Menu>
        )

    }
}