import React, { PureComponent, Fragment } from 'react';
import { load, connect } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';
import { fetchFollower } from '../api'; // somewhere with axios

class Control4 extends PureComponent {
  render() {
    const { loading, user, follower } = this.props;
    return (
      <Fragment>
        {!loading && !follower && (
          <div
            style={{ padding: 10, color: 'blue', cursor: 'pointer' }}
            onClick={() => load('followerClick', fetchFollower)}
          >
            click to load follower
          </div>
        )}
        <Loading loading={loading} />
        <DisplayComponent user={user} follower={follower} />
      </Fragment>
    );
  }
}

export default connect(['user', 'followerClick'])(Control4);
