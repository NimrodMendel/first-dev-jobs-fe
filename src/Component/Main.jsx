import React, { useState } from "react";
import "antd/dist/antd.css";
import FormsF from "./FormsF";
import { Row, Col } from "antd";
// import SignUp from "./SignUp";
import { Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export default function Main() {
  const [collapsed, setCollapsed] = useState(true);
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<UserAddOutlined />}>
              <Link to="/Login">Login</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<LoginOutlined />}>
              <Link to="/SignUp">SignUp</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              color: "white",
              paddingLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {"Welcome to <First Dev Jobs>"}
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <Row justify="center">
              <Col flex="500px">
                <FormsF />
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {"<First Dev Jobs ©2021>"}
          </Footer>
        </Layout>
      </Layout>
      ;
    </>
  );
}
// ==============
// ==============
// ==============

// export default class Main extends React.Component {
//   state = {
//     collapsed: true,
//   };

//   onCollapse = (collapsed) => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     const { collapsed } = this.state;
//     return (
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Option 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Option 2
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />}>
//               Files
//             </Menu.Item>
//             <Menu.Item key="10" icon={<LoginOutlined />}>
//               <Link to="/SignUp">SignUp</Link>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header
//             className="site-layout-background"
//             style={{
//               padding: 0,
//               color: "white",
//               paddingLeft: "20px",
//               fontWeight: "bold",
//             }}
//           >
//             {"Welcome to <First Dev Jobs>"}
//           </Header>
//           <Content style={{ margin: "0 16px" }}>
//             <Breadcrumb style={{ margin: "16px 0" }}>
//               {/* <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
//             </Breadcrumb>
//             <Row justify="center">
//               <Col flex="500px">
//                 <FormsF />
//               </Col>
//             </Row>
//           </Content>
//           <Footer style={{ textAlign: "center" }}>
//             {"<First Dev Jobs ©2021>"}
//           </Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }
