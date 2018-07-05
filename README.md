# redux-loadings

Yes, you use `redux` to manage you data, and you are loading data from api.

You are writing these with `redux-actions`, `redux-thunk`, `redux-promise`, `redux-saga`, maybe even `dva` with `dva-loading`.

You may not need them. You may not need to write `actions`, `middlewares`, `reducers`, and you may not need to write anything about async stuff.
 
Just write as:

```jsx harmony
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { load, mapResultToProps } from 'redux-loadings';
import LoadingComponent from './LoadingComponent'
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
        <LoadingComponent />
      );
    }
    return (
      <DisplayComponent user={user} follower={follower} />
    );
  }
}

const mapStateToProps = mapResultToProps(['user', 'follower']);

export default connect(mapStateToProps)(ControlComponent);
```

## example

```
git clone https://github.com/dancerphil/redux-loadings.git
cd example
npm i
npm start
```

## todo

- [ ] release 0.1.0
