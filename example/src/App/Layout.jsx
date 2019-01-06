import React from 'react';
import { connectWith } from 'redux-loadings';
import { Menu, Layout as AntdLayout } from 'antd';
import { get } from 'lodash';
import { createBrowserHistory } from 'history';
import { setSelectedKey } from '../shared/load';
import routes from './routes';

const { Content, Sider } = AntdLayout;

const history = createBrowserHistory();

setSelectedKey(history.location.pathname.split('/')[1] || get(routes, ['0', 'key']));

const onClick = ({ key }) => {
  history.push(key);
  setSelectedKey(key);
};

const MenuItem = ({ key, label }) => <Menu.Item key={key}>{label}</Menu.Item>;

const Layout = ({ selectedKey }) => {
  const { Component } = routes.find(({ key }) => key === selectedKey);
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick}>
          {routes.map(MenuItem)}
        </Menu>
      </Sider>
      <Content>
        <Component />
      </Content>
    </AntdLayout>
  );
};

export default connectWith('selectedKey', Layout, () => null);
