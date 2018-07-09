import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load, getLoading, getResults } from 'redux-loadings';
import Loading from '../ui/Loading'
import DisplayComponent from '../ui/Display'
import { fetchUser, fetchFollower } from '../api'; // somewhere with axios

class Control4 extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load('user4', fetchUser));
  }

  render() {
    const { loading, user, follower, dispatch } = this.props;
    return (
      <Fragment>
        {!loading && !follower && (
          <div
            style={{ padding: 10, color: 'blue', cursor: 'pointer' }}
            onClick={() => dispatch(load('follower4', fetchFollower))}
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

const mapStateToProps = (state) => {
  const loading = getLoading(state, ['user4', 'follower4']);
  const [user, follower] = getResults(state, ['user4', 'follower4']);
  return { loading, user, follower };
}

export default connect(mapStateToProps)(Control4);
