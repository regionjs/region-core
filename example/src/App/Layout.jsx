import React from 'react';
import { set, connectWith } from 'redux-loadings';
import { Menu, Layout as AntdLayout } from 'antd';
import config from './layout';

const { Content, Sider } = AntdLayout;

set('selectedKey', config[0].label);

const onClick = ({ key }) => set('selectedKey', key);

const Layout = ({ selectedKey }) => (
  <AntdLayout style={{ minHeight: '100vh' }}>
    <Sider width={200} theme="light">
      <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick}>
        {config.map(({ label }) => <Menu.Item key={label}>{label}</Menu.Item>)}
      </Menu>
    </Sider>
    <Content>
      {config.map(({ label, Component }) => <Component key={label} />)}
    </Content>
  </AntdLayout>
);

export default connectWith('selectedKey', Layout);
