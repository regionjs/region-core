import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import Loading from './Loading';
import Display from './Display';

const Loading3 = ({ user, follower }) => (
  <Fragment>
    <Loading loading />
    <Display user={user} follower={follower} />
  </Fragment>
);

export default connectWith(['user', 'follower'], Display, Loading3);
