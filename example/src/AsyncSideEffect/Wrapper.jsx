import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from '../interface';
import Lines from '../components/Lines';

const Display = ({ loading, user, asyncSideEffect, follower }) => (
  <Card
    title={`${user}(${asyncSideEffect})`}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
  </Card>
);

export default connectWith(['user', 'follower', 'asyncSideEffect'], Display);
