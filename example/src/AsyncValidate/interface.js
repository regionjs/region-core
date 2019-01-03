import { formRegion } from '../regions/regionForm';
import { fetchValidate } from '../interface/fetch';

const { set, load } = formRegion;

set('validateValue', null);
set('validateMessage', '');

export const loadValidate = (value) => {
  set('validateValue', value);
  load('validateMessage', fetchValidate, { params: value });
};
