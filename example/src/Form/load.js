import { set } from 'redux-loadings';
import factory from '../shared/setFactory';

export const setA = factory('a');

export const setB = factory('b');

export const toggleA = () => set('a', null, {
  format: (result, snapshot) => !snapshot,
});

export const setC = factory('c');

export const setD = factory('d');
