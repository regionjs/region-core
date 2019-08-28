import React from 'react';
import { Button } from 'antd';
import { createRegion } from 'region-core';
import { apiGetUser } from './api';
import Card from "../shared/Card";
import Divider from "../shared/Divider";

const region = createRegion()

// apiGetUser may reject
const loadUser = region.loadBy(apiGetUser)

loadUser();

const Component = () => {
  const loading = region.useLoading();
  const value = region.useValue()
  const error = region.useError()
  const fetchTime = region.useFetchTime()

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
  )
}

export default Component;
