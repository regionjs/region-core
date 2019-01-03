import { getProvider } from 'redux-loadings';
import { formRegion } from '../shared/regionForm';

export const Provider = getProvider({ reducers: {
  form: formRegion.reducer,
} });
