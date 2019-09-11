import { createRegion } from 'region-core';
import { fetchUser, fetchFollower, deleteFollower } from './api';

const userRegion = createRegion();
const followerRegion = createRegion();

export const loadUser = userRegion.loadBy(fetchUser);

export const loadFollower = followerRegion.loadBy(fetchFollower, {
  format: (result, snapshot = []) => {
    snapshot.push(result);
    return snapshot.slice();
  },
});

export const clearFollower = followerRegion.loadBy(deleteFollower);

export const useUser = userRegion.useValue;

export const useFollower = followerRegion.useValue;

export const useLoading = () => {
  const userLoading = userRegion.useLoading();
  const followerLoading = followerRegion.useLoading();
  return userLoading || followerLoading;
};
