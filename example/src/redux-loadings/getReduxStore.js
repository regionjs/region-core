// TODO extract
import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import { handleActions } from 'redux-actions';
import { assignValueDeep, setValueDeep } from './reducerPrototype';
import { debug, group, groupEnd } from './logger';

const enableSetResult = true;

function log(key) {
  if (enableSetResult) {
    debug('result', `SET_LOADING ${key}`);
  }
}

function groupLog(key, result) {
  if (enableSetResult) {
    group('result', `SET_RESULT ${key}`);
    console.debug(result);
    groupEnd();
  }
}

const counter = handleActions({
  SET_LOADING: (state, action) => {
    const { key } = action.payload;
    log(key);
    return assignValueDeep(state, ['loadings', key], true);
  },
  SET_RESULT: (state, action) => {
    const { key, result } = action.payload;
    groupLog(key, result);
    setValueDeep(state, ['results', key], result);
    setValueDeep(state, ['fetchTimes', key], new Date().getTime());
    return assignValueDeep(state, ['loadings', key], false);
  },
}, {});

const middleware = applyMiddleware(reduxThunk);

let store = compose(middleware)(createStore)(counter);

export { store };
