import { createRegion } from 'region-core';
import { apiGetUser, apiGetNextFollower } from './api';

const userRegion = createRegion<string>();
const followerRegion = createRegion<string[]>([]);

export const loadUser = userRegion.loadBy(apiGetUser);

export const loadFollower = () => followerRegion.loadBy(
  apiGetNextFollower,
  (state = [], result) => {
    state.push(result);
    return state.slice();
  },
)();

export const clearFollower = followerRegion.reset;

export const useUser = userRegion.useValue;

export const useFollower = followerRegion.useValue;

export const useLoading = () => {
  const userLoading = userRegion.useLoading();
  const followerLoading = followerRegion.useLoading();
  return userLoading || followerLoading;
};
