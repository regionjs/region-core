import { load, set } from 'region-shortcut';
import { fetchA, fetchB, fetchC } from '../shared/fetch';
import factory from '../shared/setFactory';

export const setNextCall = factory('nextCall');

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
