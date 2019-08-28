import React from 'react';
import { createRegion } from 'region-core';
import { Menu, Layout as AntdLayout } from 'antd';
import { get, groupBy } from 'lodash';
import history from './history';
import routes from './routes';
import External from './External';

const { Content, Sider } = AntdLayout;

const initSelectedKey = () => {
  const { hash } = history.location;
  const initSelectKey = hash !== '' ? hash.slice(1) : null;
  const defaultSelectKey = get(routes, ['0', 'key']);
  if (!initSelectKey || routes.find(({ key }) => key === initSelectKey) === undefined) {
    return defaultSelectKey;
  } else {
    return initSelectKey;
  }
}

const selectedKeyRegion = createRegion(initSelectedKey())

const defaultSelectKey = get(routes, ['0', 'key']);

const onClick = ({ key }) => {
  history.replace(`#${key}`);
  selectedKeyRegion.set(key);
};

const MenuItem = ({ key, label }) => <Menu.Item key={key}>{label}</Menu.Item>;

const getMenuElements = () => {
  const routeGroups = groupBy(routes, 'groupName')

  return Object.entries(routeGroups).map(([groupName, routeList]) => {
    const routeElements = routeList.map(MenuItem)
    if(routeList.length === 1) {
      return routeElements
    }
    return (
      <Menu.SubMenu key={groupName} title={groupName} >
        {routeElements}
      </Menu.SubMenu>
    )
  })
  // routes.map(MenuItem);
}

const menuElements = getMenuElements()

const Layout = () => {
  const loading = selectedKeyRegion.useLoading();
  const selectedKey = selectedKeyRegion.useValue();
  if (loading) {
    return null;
  }
  const route = routes.find(({ key }) => key === selectedKey);
  if (!route) {
    selectedKeyRegion.set(defaultSelectKey);
    return null;
  }
  const { Component } = route;
  return (
    <AntdLayout style={{ height: '100vh' }}>
      <Sider width={200} theme="light" style={{ overflowY: 'auto' }}>
        <Menu mode="inline" selectedKeys={[selectedKey]} onClick={onClick} style={{minHeight: '100%', borderRight: '1px solid #e8e8e8'}}>
          {menuElements}
        </Menu>
      </Sider>
      <Content style={{display: 'flex', flexDirection: 'column'}}>
        <Component />
        {selectedKey !== 'GetStarted' && <External selectedKey={selectedKey} />}
      </Content>
    </AntdLayout>
  );
};

export default Layout;
