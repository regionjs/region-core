import { set, load } from 'redux-loadings';
import { fetchFollower, fetchAsyncEffect, fetchA, fetchB, fetchC } from './fetch';

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

set('result', null);

const fetchCalls = {
  a: fetchA,
  b: fetchB,
  c: fetchC,
};

export const loadResultFactory = (value) => {
  const fetch = fetchCalls[value];
  return () => load('result', fetch, {
    forceUpdate: true,
  });
};
