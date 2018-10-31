import React, { Fragment } from 'react';
import { connectWith } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';

const Loading3 = ({ user, follower }) => (
  <Fragment>
    <Loading loading />
    <DisplayComponent user={user} follower={follower} />
  </Fragment>
);

export default connectWith(['user', 'follower'], DisplayComponent, Loading3);
