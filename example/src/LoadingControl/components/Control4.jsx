import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Button } from 'antd';
import Loading from '../ui/Loading';
import { loadSome } from '../../load/index';

const DisplayComponent = ({ user, follower }) => (
  <div style={{ flex: 1, width: '100%', padding: 10 }}>
    <h1>{user}</h1>
    <p>{follower}</p>
  </div>
);

const Control4 = ({ user, some }) => (
  <Fragment>
    {!some && (
      <div style={{ padding: 10 }}><Button onClick={loadSome}>click to load something</Button></div>
    )}
    <DisplayComponent user={user} follower={some} />
  </Fragment>
);

const Loading4 = ({ user, some }) => (
  <Fragment>
    <Loading loading />
    <DisplayComponent user={user} follower={some} />
  </Fragment>
);

export default connectWith(['user', 'some'], Control4, Loading4);
