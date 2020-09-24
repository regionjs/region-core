import { createRegion } from 'region-core';
import { fetchUser, fetchFollower, deleteFollower } from './api';

const userRegion = createRegion<string[]>([]);
const followerRegion = createRegion<string[]>([]);

export const loadUser = userRegion.loadBy(fetchUser);

export const loadFollower = () => followerRegion.load(
  fetchFollower,
  (state = [], result) => {
    state.push(result);
    return state.slice();
  },
);

export const clearFollower = () => followerRegion.load(deleteFollower);

export const useUser = userRegion.useValue;

export const useFollower = followerRegion.useValue;

export const useLoading = () => {
  const userLoading = userRegion.useLoading();
  const followerLoading = followerRegion.useLoading();
  return userLoading || followerLoading;
};
