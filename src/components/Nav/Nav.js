import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Nav extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="mail"/>导航一
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore"/>导航二
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