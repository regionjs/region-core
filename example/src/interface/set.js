import { set } from 'redux-loadings';

const factory = key => value => set(key, value);

export const setSelectedKey = factory('selectedKey');

export const setA = factory('a');

export const setB = factory('b');

export const toggleB = () => set('b', null, {
  format: (result, snapshot) => !snapshot,
});

export const setC = factory('c');

export const setD = factory('d');

export const setNextCall = factory('nextCall');

const generate = (type, id) => ({
  id: String(id),
  type,
  value: `item with id === ${id} and type === ${type}`,
});

set('array', ['cat', 'cat', 'dog', 'cat', 'dog'].map(generate));

export const setId = factory('id');

export const setType = factory('type');
