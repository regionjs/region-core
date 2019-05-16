import React from 'react';
import { Menu, Layout as AntdLayout } from 'antd';
import { get } from 'lodash';
import history from './history';
import { appRegion, setSelectedKey } from './region';
import routes from './routes';
import External from './External';
import Editor from './Editor';

const { Content, Sider } = AntdLayout;

const defaultSelectKey = get(routes, ['0', 'key']);

const onClick = ({ key }) => {
  history.replace(`#${key}`);
  setSelectedKey(key);
};

const MenuItem = ({ key, label }) => <Menu.Item key={key}>{label}</Menu.Item>;

const Layout = () => {
  const {loading, selectedKey} = appRegion.useProps('selectedKey');
  if (loading) {
    return null;
  }
  const route = routes.find(({ key }) => key === selectedKey);
  if (!route) {
    setSelectedKey(defaultSelectKey);
    return null;
  }
  const { Component } = route;
  return (
    <AntdLayout style={{ height: '100vh' }}>
      <Sider width={200} theme="light" style={{ overflowY: 'auto' }}>
        <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick} style={{minHeight: '100%', borderRight: '1px solid #e8e8e8'}}>
          {routes.map(MenuItem)}
        </Menu>
      </Sider>
      <Content style={{display: 'flex', flexDirection: 'column'}}>
        {selectedKey !== 'Home' && <External selectedKey={selectedKey} />}
        <Component />
        <Editor selectedKey={selectedKey} />
      </Content>
    </AntdLayout>
  );
};

export default Layout;
