import { set, load } from 'region-shortcut';
import { fetchFollower } from '../shared/fetch';

set('sideEffect', null);

export const loadFollowerWithSideEffect = () => load('follower', fetchFollower, {
  format: (result, snapshot = []) => {
    snapshot.push(result);
    set('sideEffect', snapshot.length);
    return snapshot.slice();
  },
});
