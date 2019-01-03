import { load, set } from 'redux-loadings';
import { fetchAsyncEffect, fetchFollower } from '../shared/fetch';

set('asyncSideEffect', null);

export const loadFollowerWithAsyncSideEffect = async () => {
  const follower = await load('follower', fetchFollower, {
    forceUpdate: true,
    format: (result, snapshot = []) => {
      snapshot.push(result);
      set('sideEffect', snapshot.length);
      return snapshot.slice();
    },
  });
  load('asyncSideEffect', fetchAsyncEffect, {
    forceUpdate: true,
    params: follower,
  });
};
