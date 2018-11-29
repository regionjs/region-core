import { set, load } from 'redux-loadings';
import { fetchUser, fetchFollower, fetchSome, deleteFollower } from './fetch';

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
