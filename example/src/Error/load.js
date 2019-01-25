import { formRegion } from '../shared/regionForm';
import { fetchValueWithError } from '../shared/fetch';

export const loadValueWithError = () => {
  formRegion.load('valueWithError1', fetchValueWithError, { format: (result, snapshot, error) => (error ? null : result) });
  formRegion.load('valueWithError2', fetchValueWithError, { format: (result, snapshot, error) => (error ? null : result) });
};
