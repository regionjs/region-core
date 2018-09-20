import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getLoading, getResults } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';

class Control2 extends PureComponent {
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

const mapStateToProps = () => {
  const loading = getLoading('user');
  const [user, follower] = getResults(['user', 'follower']);
  return { loading, user, follower };
};

export default connect(mapStateToProps)(Control2);
