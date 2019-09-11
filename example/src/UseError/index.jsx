import React from 'react';
import { createRegion } from 'region-core';
import { Button, Card, Divider } from '../components';
import { apiGetUser } from './api';

const region = createRegion();

// apiGetUser may reject
const loadUser = region.loadBy(apiGetUser);

loadUser();

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue();
  const error = region.useError();
  const fetchTime = region.useFetchTime();

  return (
    <Card loading={loading}>
      {value}
      <Divider/>
      {error && error.message}
      <Divider/>
      {new Date(fetchTime).toString()}
      <Divider/>
      <Button onClick={loadUser}>loadUser</Button>
    </Card>
  );
};

export default Component;
