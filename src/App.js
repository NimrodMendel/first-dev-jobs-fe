import './App.css';
import 'rsuite/lib/styles/index.less';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import {
  MacCommandOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import  Feed from './Component/Feed';
import TabsP from './Component/myprofile/TabsP';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  const size = useWindowSize();
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = () => {
    if(collapsed === true){
      setCollapsed(false);
    }else{
      setCollapsed(true);
    }
  };
    return (
    <>
    <div>Current window width: {size.width}</div>
    <Router>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<MacCommandOutlined />}>
            <Link to='/'>My Profile</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
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
              <Switch>
                  <Route exact path="/">
                  <Feed/>
                  </Route>
                  <Route path="/myprofile">
                  <TabsP/>
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Content>
          {/* ---------------------------------------------- */}
          <Footer style={{ textAlign: 'center' }}>{'<First Dev Jobs ©2021>'}</Footer>
        </Layout>
      </Layout>
    
    
    </Router>
   
    </>
       
    );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}


