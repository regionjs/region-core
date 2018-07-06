import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as loadingReducer, setReducerPath } from 'redux-loadings';

const middleware = applyMiddleware(thunk);
const reducer = combineReducers({ other : {}, results: loadingReducer });
setReducerPath('results');
const store = compose(middleware)(createStore)(reducer);

export { store };
