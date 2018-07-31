import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getReducer } from 'redux-loadings';

const middleware = applyMiddleware(thunk);
const reducer = combineReducers({ results: getReducer({ reducerPath: 'results' }) });
const store = compose(middleware)(createStore)(reducer);

export default store;
