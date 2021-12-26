import React from 'react'
import { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons'
const { Header } = Layout

export default function TopHeader() {



    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }


    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    superuser
                </a>
            </Menu.Item>

            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );
    return (


        <Header className="site-layout-background" style={{ padding: ' 0 16px' }}>

            {
                collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /
                > : <MenuFoldOutlined onClick={changeCollapsed} />
            }


            <div style={{ float: "right" }}>
                <span>welcome admin</span>
                <Dropdown overlay={menu}>
                    <Avatar size={32} icon={<UserOutlined />} />

                </Dropdown></div>

        </Header>
    )
}
