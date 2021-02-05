import React from 'react';
import { createRegion } from 'region-core';
import { Button, Card, Divider } from '../components';
import { apiGetUser } from './api';
import {Descriptions} from "antd";

const region = createRegion();

// apiGetUser may reject
const loadUser = () => region.load(apiGetUser);

loadUser();

const Component = () => {
  const { loading, error, fetchTime, value } = region.useProps();

  return (
    <Card loading={loading}>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Value">{value}</Descriptions.Item>
        <Descriptions.Item label="Error">{error ? error.message : ''}</Descriptions.Item>
        <Descriptions.Item label="FetchTime">{new Date(fetchTime).toString()}</Descriptions.Item>
      </Descriptions>
      <Divider/>
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
