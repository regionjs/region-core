import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getReducer, setConfig } from 'redux-loadings';

const middleware = applyMiddleware(thunk);
const reducer = combineReducers({ other : {}, results: getReducer() });
setConfig({ reducerPath: 'results' });
const store = compose(middleware)(createStore)(reducer);

export { store };
