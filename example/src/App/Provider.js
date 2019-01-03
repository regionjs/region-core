import { getProvider } from 'redux-loadings';
import { formRegion } from '../regions/regionForm';

export const Provider = getProvider({ reducers: {
  form: formRegion.reducer,
} });
