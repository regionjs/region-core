import React from 'react';
import { connectWith } from 'region-shortcut';
import { Menu, Layout as AntdLayout } from 'antd';
import { get } from 'lodash';
import { createBrowserHistory } from 'history';
import { setSelectedKey } from '../shared/load';
import routes from './routes';
import External from './External';

const { Content, Sider } = AntdLayout;

const history = createBrowserHistory();
const { hash } = history.location;
const initSelectKey = hash !== '' ? hash.slice(1) : null;
const defaultSelectKey = get(routes, ['0', 'key']);

if (!initSelectKey || routes.find(({ key }) => key === initSelectKey) === undefined) {
  setSelectedKey(defaultSelectKey);
} else {
  setSelectedKey(initSelectKey);
}

const onClick = ({ key }) => {
  history.push(`#${key}`);
  setSelectedKey(key);
};

const MenuItem = ({ key, label }) => <Menu.Item key={key}>{label}</Menu.Item>;

const Layout = ({ selectedKey }) => {
  const route = routes.find(({ key }) => key === selectedKey);
  if (!route) {
    setSelectedKey(defaultSelectKey);
    return null;
  }
  const { Component } = route;
  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick}>
          {routes.map(MenuItem)}
        </Menu>
      </Sider>
      <Content>
        {selectedKey !== 'Home' && <External selectedKey={selectedKey} />}
        <Component />
      </Content>
    </AntdLayout>
  );
};

export default connectWith('selectedKey', Layout, { Loading: () => null });
