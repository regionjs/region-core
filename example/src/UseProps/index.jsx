import React from 'react';
import { Button } from 'antd';
import { createRegion } from 'region-core';
import { apiGetUser } from './api';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const region = createRegion();

// apiGetUser may reject
const loadUser = region.loadBy(apiGetUser);

loadUser();

const Component = () => {
  // TODO support error as typeof Error & support value as value
  const { loading, error, fetchTime, data: value } = region.useProps();

  return (
    <Card loading={loading}>
      {value}
      <Divider/>
      {error}
      <Divider/>
      {new Date(fetchTime).toString()}
      <Divider/>
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
