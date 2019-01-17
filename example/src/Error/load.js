import { formRegion } from '../shared/regionForm';
import { fetchValueWithError } from '../shared/fetch';

export const loadValueWithError = () => {
  formRegion.load('valueWithError1', fetchValueWithError);
  formRegion.load('valueWithError2', fetchValueWithError);
};
