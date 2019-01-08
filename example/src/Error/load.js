import { formRegion } from '../shared/regionForm';
import { fetchValueWithError } from '../shared/fetch';

export const loadValueWithError = () => formRegion.load('valueWithError', fetchValueWithError);
