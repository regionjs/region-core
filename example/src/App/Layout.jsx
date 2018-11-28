import React from 'react';
import { set, connectWith } from 'redux-loadings';
import { Menu, Layout as AntdLayout } from 'antd';
import { get } from 'lodash';
import route from './route';

const { Content, Sider } = AntdLayout;

set('selectedKey', get(route, ['0', 'label']));

const onClick = ({ key }) => set('selectedKey', key);

const MenuItem = ({ label }) => <Menu.Item key={label}>{label}</Menu.Item>;

const ContentItem = ({ label, Component }) => <Component key={label} />;

const Layout = ({ selectedKey }) => (
  <AntdLayout style={{ minHeight: '100vh' }}>
    <Sider width={200} theme="light">
      <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick}>
        {route.map(MenuItem)}
      </Menu>
    </Sider>
    <Content>
      {route.map(ContentItem)}
    </Content>
  </AntdLayout>
);

export default connectWith('selectedKey', Layout);
