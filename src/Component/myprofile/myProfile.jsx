
import  React  from 'react';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MacCommandOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import TabsP from './TabsP';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


 class Myprofile extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  
  navtoProfile() {
    this.props.history.push("/myprofile");
  }
  navtoFeed() {
    this.props.history.push("/");
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item onClick={this.navtoFeed.bind(this)} key="1" icon={<MacCommandOutlined />}>
              Feed
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu> */}
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
            {'Welcome to <First Dev Jobs>'}
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            
            <Row justify="center">
              <Col flex="500px">
                <TabsP/>
               
                {/* need to Filled */}
              </Col>
            </Row>

        
          </Content>
          <Footer style={{ textAlign: 'center' }}>{'<First Dev Jobs ©2021>'}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter (Myprofile);