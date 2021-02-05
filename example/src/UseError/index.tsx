import React from 'react';
import { createRegion } from 'region-core';
import { Descriptions, Button } from 'antd';
import { Card, Divider } from '../components';
import { apiGetUser } from './api';

const region = createRegion<string>();

// apiGetUser may reject
const loadUser = () => region.load(apiGetUser);

loadUser();

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue();
  const error = region.useError();
  const fetchTime = region.useFetchTime() || 0;

  return (
    <Card loading={loading}>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
        <Descriptions.Item label="Error">{error ? error.message : ''}</Descriptions.Item>
        <Descriptions.Item label="FetchTime">{new Date(fetchTime).toString()}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
