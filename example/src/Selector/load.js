import { set, setBy } from 'region-shortcut';

const generate = (type, id) => ({
  id: String(id),
  type,
  value: `item with id === ${id} and type === ${type}`,
});

const animalArray = ['cat', 'cat', 'dog', 'cat', 'dog'].map(generate)

set('array', animalArray);

export const setId = setBy('id');

export const setType = setBy('type');
