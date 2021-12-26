import React from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { Outlet } from 'react-router-dom'
import { Layout,Button } from 'antd';


import './NewsSandBox.css'

const { Content } = Layout;

export default function NewsSandBox() {
    return (
        <Layout>
            <SideMenu />
            <Layout className="site-layout">
                <TopHeader />

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow:"auto"
                    }}
                >
                    <Button>button</Button>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
        // <Layout>

        // </Layout>
    )
}
