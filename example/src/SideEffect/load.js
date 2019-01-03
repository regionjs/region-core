import { set, load } from 'redux-loadings';
import { fetchFollower } from '../shared/fetch';

set('sideEffect', null);

export const loadFollowerWithSideEffect = () => load('follower', fetchFollower, {
  forceUpdate: true,
  format: (result, snapshot = []) => {
    snapshot.push(result);
    set('sideEffect', snapshot.length);
    return snapshot.slice();
  },
});
