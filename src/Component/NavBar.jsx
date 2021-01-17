
import React, { useState } from 'react';
import 'antd/dist/antd.css'
import  Feed from './Feed'
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MacCommandOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";
import TabsP from './myprofile/TabsP'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


 function NavBar(props){
  const [collapsed, setCollapsed] = useState(true);
  const [nav, setNav] = useState(1);
  const onCollapse = () => {
    if(collapsed === true){
      setCollapsed(false);
    }else{
      setCollapsed(true);
    }
  };
  
    let navResult;
    if(nav === 1){
      navResult = <Feed/>;
    }
    if(nav === 2){
      navResult = <TabsP/>;
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item onClick={() => setNav(1)} key="1" icon={<MacCommandOutlined />}>
            <Link to='/'>My Profile</Link>
            </Menu.Item>
            <Menu.Item onClick={() => setNav(2)} key="2" icon={<UserOutlined />}>
            <Link to='/myprofile'>My Profile</Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" 
          
          style={{ padding: 0 , color: 'white',paddingLeft: '20px' ,fontWeight:'bold'}}>
            {'Welcome to <First Dev Jobs>' }
            
          </Header>
          {/* NavBar Navigation*/}
          {/* ---------------------------------------------- */}
          <Content style={{ margin: '0 16px' }}>
            <Row justify="center">
              <Col style={{display:'flex',justifyContent:'center', flexDirection:'column'}}  flex="500px">
              {navResult}
              </Col>
            </Row>
          </Content>
          {/* ---------------------------------------------- */}
          <Footer style={{ textAlign: 'center' }}>{'<First Dev Jobs ©2021>'}</Footer>
        </Layout>
      </Layout>
    );
  
}

export default withRouter (NavBar);