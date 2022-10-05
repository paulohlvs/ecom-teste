import React from 'react';
import { Link } from 'react-router-dom'
import {  GlobalOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';

 const {Sider} = Layout;



export default function SideBar() {

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo">
                <img width="150px" height="30px" alt='Logo ECOM' src="https://camo.githubusercontent.com/d44434144d565e9dc74895b11f1942f6d9dc0903dfb6d6a042a7aadc1637bdb6/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3837303738393837333634333138383233352f3837313039383633383137303938383537342f6c6f676f6272616e636f4c6f676f732e706e67" />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                items={[
                    {
                      
                      icon: <GlobalOutlined />,
                      label: <Link to="/">Home</Link>,
                     
                    },
                  ]}
                
            />
        </Sider>
    );
}