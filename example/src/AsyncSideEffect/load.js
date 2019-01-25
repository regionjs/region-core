import { load, set } from 'region-shortcut';
import { fetchAsyncEffect, fetchFollower } from '../shared/fetch';

set('asyncSideEffect', null);

export const loadFollowerWithAsyncSideEffect = async () => {
  const follower = await load('follower', fetchFollower, {
    format: (result, snapshot = []) => {
      snapshot.push(result);
      set('sideEffect', snapshot.length);
      return snapshot.slice();
    },
  });
  load('asyncSideEffect', fetchAsyncEffect, {
    params: follower,
  });
};
