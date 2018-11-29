import { set, load } from 'redux-loadings';
import { fetchUser, fetchFollower, fetchSome, deleteFollower, fetchAsyncEffect } from './fetch';

export const loadUser = () => load('user', fetchUser);

set('some', null);

export const loadSome = () => load('some', fetchSome);

export const loadFollower = () => load('follower', fetchFollower, {
  forceUpdate: true,
  format: (result, snapshot = []) => {
    snapshot.push(result);
    return snapshot.slice();
  },
});

export const clearFollower = () => load('follower', deleteFollower, {
  forceUpdate: true,
});

set('sideEffect', null);

export const loadFollowerWithSideEffect = () => load('follower', fetchFollower, {
  forceUpdate: true,
  format: (result, snapshot = []) => {
    snapshot.push(result);
    set('sideEffect', snapshot.length);
    return snapshot.slice();
  },
});

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
