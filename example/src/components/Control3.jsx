import React, { PureComponent, Fragment } from 'react';
import { connect } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';

class Control3 extends PureComponent {
  render() {
    const { loading, user, follower } = this.props;
    return (
      <Fragment>
        <Loading loading={loading} />
        <DisplayComponent user={user} follower={follower} />
      </Fragment>
    );
  }
}

export default connect(['user', 'follower'])(Control3);
