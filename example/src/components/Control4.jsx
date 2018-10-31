import React, { Fragment } from 'react';
import { load, connectWith } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';
import { fetchFollower } from '../api'; // somewhere with axios

const Link = () => (
  <div
    style={{ padding: 10, color: 'blue', cursor: 'pointer' }}
    onClick={() => load('followerClick', fetchFollower)}
  >
    click to load follower
  </div>
);

const Control4 = ({ user, followerClick: follower }) => (
  <Fragment>
    {!follower && <Link />}
    <DisplayComponent user={user} follower={follower} />
  </Fragment>
);

const Loading4 = ({ user, followerClick: follower }) => (
  <Fragment>
    <Loading loading />
    <DisplayComponent user={user} follower={follower} />
  </Fragment>
);

export default connectWith(['user', 'followerClick'], Control4, Loading4);
