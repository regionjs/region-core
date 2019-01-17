import { set, load } from 'region-shortcut';
import { fetchUser, fetchFollower, fetchSome, deleteFollower } from './fetch';
import factory from './setFactory';

export const setSelectedKey = factory('selectedKey');

export const loadUser = () => load('user', fetchUser);

set('some', null);

export const loadSome = () => load('some', fetchSome);

export const loadFollower = () => load('follower', fetchFollower, {
  format: (result, snapshot = []) => {
    snapshot.push(result);
    return snapshot.slice();
  },
});

export const clearFollower = () => load('follower', deleteFollower);
