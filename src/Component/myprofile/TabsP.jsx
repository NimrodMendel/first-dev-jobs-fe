import { Tabs, Breadcrumb } from 'antd';
import React from 'react';
import  MyProfileTab  from './myProfileTab';
import UploadCV from './UploadCV';
const { TabPane } = Tabs;

const TabsP = () => (
  <>
  <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>home</Breadcrumb.Item>
              <Breadcrumb.Item>myprofile</Breadcrumb.Item>
            </Breadcrumb>
  <Tabs defaultActiveKey="1" centered>
    <TabPane style={{float:'right'}} tab="Your Profile" key="1">
      <MyProfileTab/>
    </TabPane>
    <TabPane tab="Your CV.pdf" key="2">
      <UploadCV/>
    </TabPane>
    <TabPane tab="Your Save Jobs" key="3">
      Your Save Jobs
    </TabPane>
  </Tabs>
  </>
);

export default TabsP;