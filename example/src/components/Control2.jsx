import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { load, getLoading, getResults } from 'redux-loadings';
import Loading from '../ui/Loading';
import DisplayComponent from '../ui/Display';
import { fetchUser, fetchFollower } from '../api'; // somewhere with axios

class Control2 extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load('user', fetchUser));
    dispatch(load('follower', fetchFollower));
  }

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

const mapStateToProps = (state) => {
  const loading = getLoading(state, 'user');
  const [user, follower] = getResults(state, ['user', 'follower']);
  return { loading, user, follower };
};

export default connect(mapStateToProps)(Control2);
