'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducer = undefined;

var _reduxActions = require('redux-actions');

var _reducerPrototype = require('./util/reducerPrototype');

var _logger = require('./util/logger');

var _config = require('./util/config');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setLoading = 'SET_LOADING';
var setResult = 'SET_RESULT';

function log(key) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.debug)('redux-loadings', setLoading + ' ' + key);
  }
}

function groupLog(key, result, nextState) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.group)('redux-loadings', setResult + ' ' + key, result, nextState);
  }
}

var getReducer = exports.getReducer = function getReducer() {
  var _handleActions;

  var setLoadingType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SET_LOADING';
  var setResultType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SET_RESULT';

  setLoading = setLoadingType;
  setResult = setResultType;
  return (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, setLoading, function (state, action) {
    var key = action.payload.key;

    log(key);
    return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
  }), _defineProperty(_handleActions, setResult, function (state, action) {
    var _action$payload = action.payload,
        key = _action$payload.key,
        result = _action$payload.result;

    (0, _reducerPrototype.setValueDeep)(state, ['results', key], result);
    (0, _reducerPrototype.setValueDeep)(state, ['fetchTimes', key], new Date().getTime());
    var nextState = (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], false);
    groupLog(key, result, nextState);
    return nextState;
  }), _handleActions), {});
};