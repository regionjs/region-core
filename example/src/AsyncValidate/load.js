import { formRegion } from '../shared/regionForm';
import { fetchValidate } from '../shared/fetch';

const { set, load } = formRegion;

set('value', null);
set('validate', '');

export const loadValidate = (value) => {
  set('value', value);
  load('value', fetchValidate, { params: value });
};
