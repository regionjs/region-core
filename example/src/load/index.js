import { load } from 'redux-loadings';
import { fetchFollower, fetchUser, fetchSome } from './fetch';

export const loadUser = () => load('user', fetchUser);
export const loadFollower = () => load('follower', fetchFollower, {
  forceUpdate: true,
  format: (result, snapshot = []) => {
    snapshot.push(result);
    return snapshot.slice();
  },
});
export const loadSome = () => load('some', fetchSome);
