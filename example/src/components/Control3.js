import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load, getLoading, getResults } from 'redux-loadings';
import Loading from '../ui/Loading'
import DisplayComponent from '../ui/Display'
import { fetchUser, fetchFollower } from '../api'; // somewhere with axios

class Control3 extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load('user', fetchUser));
    dispatch(load('follower', fetchFollower));
  }

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

const mapStateToProps = (state) => {
  const loading = getLoading(state, ['user', 'follower']);
  const [user, follower] = getResults(state, ['user', 'follower']);
  return { loading, user, follower };
}

export default connect(mapStateToProps)(Control3);
