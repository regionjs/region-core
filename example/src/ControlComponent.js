import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { load, mapResultToProps } from './redux-loadings'; // TODO package
import Loading from './LoadingComponent'
import DisplayComponent from './DisplayComponent'
import { fetchUser, fetchFollower } from './api'; // somewhere with axios

class ControlComponent extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load('user', fetchUser));
    dispatch(load('follower', fetchFollower));
  }

  render() {
    const { loading, user, follower } = this.props;
    if(loading) {
      return (
        <Loading />
      );
    }
    return (
      <DisplayComponent user={user} follower={follower} />
    );
  }
}

const mapStateToProps = mapResultToProps(['user', 'follower']);

export default connect(mapStateToProps)(ControlComponent);
