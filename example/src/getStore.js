import { createStore, combineReducers } from 'redux';
import { reducer as results, setConfig } from 'redux-loadings';

const reducer = combineReducers({ results });
const store = createStore(reducer);
setConfig({ store, reducerPath: 'results', strictLoading: false });

export default store;
