import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Button } from 'antd';
import { loadFollowerWithSideEffect } from './load';
import Lines from '../shared/Lines';

const Display = ({ loading, user, sideEffect, follower }) => (
  <Card
    title={`${user}(${sideEffect})`}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithSideEffect}>More</Button>
  </Card>
);

export default connectWith(['user', 'follower', 'sideEffect'], Display);
