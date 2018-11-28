"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducerPrototype = require("./reducerPrototype");

var _logger = require("./logger");

var _config = require("./config");

function log(key) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.debug)('redux-loadings', "".concat(_config.setLoading, " ").concat(key));
  }
}

function groupLog(key, result, nextState) {
  if (process.env.NODE_ENV !== 'production' && _config.enableLog) {
    (0, _logger.group)('redux-loadings', "".concat(_config.setResult, " ").concat(key), result, nextState);
  }
}

var results = function results() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var reducer = (0, _redux.combineReducers)({
  results: results
});
var store = (0, _redux.createStore)(reducer);
var _default = store;
exports.default = _default;