'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reducerPrototype = require('./util/reducerPrototype');

var _logger = require('./util/logger');

var _config = require('./util/config');

function log(key) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.debug)('redux-loadings', _config.setLoading + ' ' + key);
  }
}

function groupLog(key, result, nextState) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.group)('redux-loadings', _config.setResult + ' ' + key, result, nextState);
  }
}

var getReducer = exports.getReducer = function getReducer(config) {
  // TODO remove in 0.3
  if (config !== undefined && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    console.warn('getReducer params is deprecated');
    config = {}; // eslint-disable-line no-param-reassign
  }
  (0, _config.setConfig)(config);
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.type === _config.setLoading) {
      var key = action.payload.key;

      log(key);
      return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
    }
    if (action.type === _config.setResult) {
      var _action$payload = action.payload,
          _key = _action$payload.key,
          result = _action$payload.result;

      (0, _reducerPrototype.setValueDeep)(state, ['results', _key], result);
      (0, _reducerPrototype.setValueDeep)(state, ['fetchTimes', _key], new Date().getTime());
      var nextState = (0, _reducerPrototype.assignValueDeep)(state, ['loadings', _key], false);
      groupLog(_key, result, nextState);
      return nextState;
    }
    return state;
  };
};