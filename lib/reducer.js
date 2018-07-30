'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reduxActions = require('redux-actions');

var _reducerPrototype = require('./util/reducerPrototype');

var _logger = require('./util/logger');

var _config = require('./util/config');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var _handleActions;

  // TODO remove in 0.3
  if (config !== undefined && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    console.warn('getReducer params is deprecated');
    config = {}; // eslint-disable-line no-param-reassign
  }
  (0, _config.setConfig)(config);
  return (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _config.setLoading, function (state, action) {
    var key = action.payload.key;

    log(key);
    return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
  }), _defineProperty(_handleActions, _config.setResult, function (state, action) {
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