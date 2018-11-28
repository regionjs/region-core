import React from 'react';
import { connectWith } from 'redux-loadings';
import { Menu, Layout as AntdLayout } from 'antd';
import { get } from 'lodash';
import { setSelectedKey } from '../interface';
import route from './route';

const { Content, Sider } = AntdLayout;

setSelectedKey(get(route, ['0', 'label']));

const onClick = ({ key }) => setSelectedKey(key);

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
