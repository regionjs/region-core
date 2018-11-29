import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import { Button } from 'antd';
import Loading from './Loading';
import { loadSome } from '../../interface';

const Display = ({ user, some }) => (
  <div style={{ flex: 1, width: '100%', padding: 10 }}>
    <h1>{user}</h1>
    <p>{some}</p>
  </div>
);

const Control4 = ({ user, some }) => (
  <Fragment>
    {!some && (
      <div style={{ padding: 10 }}><Button onClick={loadSome}>click to load something</Button></div>
    )}
    <Display user={user} some={some} />
  </Fragment>
);

const Loading4 = ({ user, some }) => (
  <Fragment>
    <Loading loading />
    <Display user={user} follower={some} />
  </Fragment>
);

export default connectWith(['user', 'some'], Control4, Loading4);
