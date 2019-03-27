import React, { Fragment } from 'react';
import { connect } from 'region-shortcut';
import RawLoading from './Loading';
import Display from './Display';

const Loading = ({ user, follower }) => (
  <Fragment>
    <RawLoading loading />
    <Display user={user} follower={follower} />
  </Fragment>
);

export default connect(['user', 'follower'], { Loading })(Display);
