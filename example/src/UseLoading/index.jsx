import React from 'react';
import { Button } from 'antd';
import { createRegion } from 'region-core';
import { apiGetUser } from './api';
import Card from '../shared/Card';
import Divider from '../shared/Divider';

const region = createRegion();

const loadUser = region.loadBy(apiGetUser);

// application initial
loadUser();

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue();

  return (
    <Card loading={loading}>
      {value}
      <Divider/>
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
