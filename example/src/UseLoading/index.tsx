import React from 'react';
import { createRegion } from 'region-core';
import { Button, Card, Divider } from '../components';
import { apiGetUser } from './api';

const region = createRegion();

const loadUser = region.loadBy(apiGetUser);

// application initial
loadUser();

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue();

  return (
    <Card loading={loading}>
      User: {value}
      <Divider/>
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
