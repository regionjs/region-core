import React from 'react';
import { createRegion } from 'region-core';
import { Button, Card, Divider } from '../components';
import { apiGetUser } from './api';

const region = createRegion();

// apiGetUser may reject
const loadUser = () => region.load(apiGetUser);

loadUser();

const Component = () => {
  const { loading, error, fetchTime, value } = region.useProps();

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
