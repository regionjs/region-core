import { getProvider } from 'redux-loadings';
import { formRegion } from '../RegionForm/region';

export const Provider = getProvider({ reducers: {
  form: formRegion.reducer,
} });
