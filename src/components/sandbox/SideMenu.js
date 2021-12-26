import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import './index.css'
import { VideoCameraOutlined, SettingOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons'
import { render } from 'sass'
import axios from 'axios'
const { Sider } = Layout
const { SubMenu } = Menu


const iconList = {
    '/home': <UserOutlined />,

    '/user-manage': <UserOutlined />,
    '/user-manage/list': <UserOutlined />,
    '/right-manage': <UserOutlined />,
    '/right-manage/role/list': <UserOutlined />,
    '/right-manage/right/list': <UserOutlined />,
}
export default function SideMenu(props) {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3500/rights?_embed=children").then(res => {
            console.log(res.data)
            setMenu(res.data)
            
        })
    }, [])

    const location=useLocation()
    const selectKeys=[location.pathname]
    const openKeys=["/"+location.pathname.split("/")[1]]
    const navigate = useNavigate()
    const checkPagePermission = (item) => {

        return item.pagepermisson === 1



    }

    const renderMenu = (menuList) => {
        return menuList.map(item => {
            if (item.children?.length>0 && checkPagePermission(item)) {
                return (
                    <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
                        {renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
                navigate(item.key)
            }}
            >
                {item.title}
            </Menu.Item>

        })
    }



    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div style={{display:"flex",height:"100%",flexDirection:"column"}}>

            <div className="logo" > system</div>

            <div style={{flex:1,overflow:"auto"}}>

            <Menu defaultOpenKeys={openKeys} theme="dark" mode="inline" selectedKeys={selectKeys}>

                {renderMenu(menu)}
            </Menu>
            </div>
            </div>
        </Sider>
    )
}
