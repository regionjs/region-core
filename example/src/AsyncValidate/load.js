import { formRegion } from '../shared/regionForm';
import { fetchValidate } from '../shared/fetch';

const { set, load } = formRegion;

set('value', null);
set('error', '');

export const loadValidate = (value) => {
  set('value', value);
  load('error', fetchValidate, { params: value });
};
