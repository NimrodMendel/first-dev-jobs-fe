import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import FormsF from "./FormsF";
import { Row, Col } from "antd";
import { Button } from "antd";

import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MacCommandOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Login from "./Login";
import SignUp from "./SignUp";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const onCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  const handelLogOut = () => {
    setIsUserLoggedIn(false);
  };

  function navtoProfile() {
    props.history.push("/myprofile");
  }
  function navtoSignUp() {
    props.history.push("/signUp");
  }
  function navtoLogin() {
    props.history.push("/login");
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<MacCommandOutlined />}>
            Feed
          </Menu.Item>

          {isUserLoggedIn && (
            <Menu.Item onClick={navtoProfile} key="4" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
          )}
          {!isUserLoggedIn && (
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <SignUp />
            </Menu.Item>
          )}
          {!isUserLoggedIn && (
            <Menu.Item key="3" icon={<LoginOutlined />}>
              <Login />
            </Menu.Item>
          )}
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
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            paddingLeft: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{"Welcome to <First Dev Jobs>"}</div>
          {isUserLoggedIn && (
            <Button danger type="primary" onClick={handelLogOut}>
              Log out <LogoutOutlined />
            </Button>
          )}
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>

          <Row justify="center">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              flex="500px"
            >
              {/* <img style={{height:'40px',width:'40px' ,borderRadius:'50%', marginLeft:'10px'}} 
              src="https://lh3.googleusercontent.com/3FB4aBlPgFUbLlwV8OubG96v43-2uo4psD09PCpVSE2rkNM4gYMM0-epbQpOE4B6smp0CeGJdrL0pPGYql3vJ25H9ybK6-SBCpgkeThC6blp_ykwmExGft0ddpA7U4qjf5sxhmfEzmKE05XFXS4LRQaaGWaBVGh3bqo1MSuI-Tgl7_Cc-gQDM8s_p-TA5L8SwnwPW3QsoO35lZ62AGJQdpW5ZzLMMIoHf7gun7onJ3ayYEWPxgUPsq88BKVLMBQntd5t7tsRw2W8QHjVw5Ykj3o8px8UoAvBjAPeqC5U9OPq_yxAOux4XuIz1_JaeqRWXaL14FiS_dM0zhXFW-ZWPXAkNaIx7FyyFF1up0f27j4lN4CJwG-pE-o6GtBDFcrk2ZPpXo7KdROanVJ7dDz0DPX3FUbG9NsExD4ACvSb_CuJNtB0xZnZUULzITysEMwo0wwsMhGLf_mUqZxUqBc4ZGHm2B2z0X8NDB8iveH6Va7ccXhbpeGGpbuQVLvS8uvtHwvv0_SRKi4ezn1-KKOe-RAIzxvBAidNGUDxZ1TOI3IMT-N4wPrY6syDQoteczgR5EVwFvY9uV8ZzQW6JOYyfnN7awmIUYUQrMngKS6wmk22qpAzNGO-02OddBmoKZubggmx-GTy59wES8DVeHETxIw2m6ZICRwmHYBZvnRo4dyMg8R90SUuke5E_Isg5Q=s500-no?authuser=0"/> */}
              <FormsF />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {"<First Dev Jobs ©2021>"}
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(SideBar);
