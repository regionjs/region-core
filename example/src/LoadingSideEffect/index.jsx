import React from 'react';
import { connectWith } from 'redux-loadings';
import { Card, Button } from 'antd';
import { loadFollowerWithAsyncSideEffect } from '../AsyncSideEffect/load';
import Lines from '../shared/Lines';

const Title = ({ user, asyncSideEffect }) => `${user}(${asyncSideEffect})`;

const Loading = ({ user }) => `${user}(...)`;

const LoadingTitle = connectWith('asyncSideEffect', Title, Loading);

const Display = ({ loading, user, follower }) => (
  <Card
    title={<LoadingTitle user={user} />}
    style={{ width: 300, margin: 30 }}
  >
    <Lines lines={follower} />
    <Button loading={loading} onClick={loadFollowerWithAsyncSideEffect}>More</Button>
  </Card>
);

export default connectWith(['user', 'follower'], Display);
