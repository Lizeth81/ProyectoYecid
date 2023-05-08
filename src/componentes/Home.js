//rfce
import { Layout, Space } from 'antd';
import React from 'react';
import '../css/Home.css';
import MenuSider from './MenuSider';
import Title from './Title';
import FooterLayouts from './FooterLayouts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Profile';
import Grade_job_table from './Grade_job_table';
const { Header, Footer, Sider, Content } = Layout;

const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >   
    <Layout>
      <Sider ><MenuSider/></Sider>
      <Layout>
        <Header className="headerStyle">
          <Title/>
        </Header>
        <Content className="contentStyle">
          <Profile/>
        </Content>
        <Footer className="footerStyle">
          <FooterLayouts/>
        </Footer>
      </Layout>
    </Layout>
  </Space>
);
export default Home;