import React, { Fragment } from 'react';
import { Button } from 'antd';
import { loadFollower } from '../../shared/load';
import Lines from '../../shared/Lines';

const Display = ({ user, follower }) => (
  <Fragment>
    <h1>{user}</h1>
    <Lines lines={follower} />
    <Button onClick={loadFollower}>more</Button>
  </Fragment>
);

export default Display;
