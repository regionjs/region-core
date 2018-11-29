import { set } from 'redux-loadings';

const factory = key => value => set(key, value);

export const setSelectedKey = factory('selectedKey');

export const setA = factory('a');

export const setB = factory('b');

export const setC = factory('c');

export const setD = factory('d');

export const setNextCall = factory('nextCall');
