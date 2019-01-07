import { set } from 'region-shortcut';
import factory from '../shared/setFactory';

const generate = (type, id) => ({
  id: String(id),
  type,
  value: `item with id === ${id} and type === ${type}`,
});

set('array', ['cat', 'cat', 'dog', 'cat', 'dog'].map(generate));

export const setId = factory('id');

export const setType = factory('type');
