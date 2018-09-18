import React, { PureComponent } from 'react';
import { connect } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';

class Control1 extends PureComponent {
  render() {
    const { loading, user, follower } = this.props;
    if (loading) {
      return (
        <Loading />
      );
    }
    return (
      <DisplayComponent user={user} follower={follower} />
    );
  }
}

export default connect(['user', 'follower'])(Control1);
