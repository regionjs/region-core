import React from 'react';
import { createRegion } from 'region-core';
import {Descriptions, Button, Spin, Space} from 'antd';
import { Card, Divider } from '../components';
import { apiGetUserResolved, apiGetUserRejected } from './api';

const region = createRegion<string>();

// apiGetUser may reject
const loadUserResolved = () => region.load(apiGetUserResolved);
const loadUserRejected = () => region.load(apiGetUserRejected);

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue();
  const error = region.useError();

  return (
    <Card>
      {loading ? <Spin /> : (
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Value">{value}</Descriptions.Item>
          <Descriptions.Item label="Error">{error ? error.message : ''}</Descriptions.Item>
        </Descriptions>
      )}
      <Divider />
      <Space>
        <Button onClick={loadUserResolved}>loadUser(Resolved)</Button>
        <Button onClick={loadUserRejected}>loadUser(Rejected)</Button>
      </Space>
    </Card>
  );
};

export default Component;
