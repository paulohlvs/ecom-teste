import React from 'react';
import { Home } from './Pages/Home'

import { Layout } from 'antd';

import './styles/styles.css';
import SideBar  from './components/SideBar';


const { Header, Content, Footer } = Layout;

function App({ childrem }) {
  return (

    <Layout >
      <SideBar />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              height: '100vh',

            }}
          >
            <Home />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );
}

export default App;
