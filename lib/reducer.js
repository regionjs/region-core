"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _reducerPrototype = require("./util/reducerPrototype");

var _logger = require("./util/logger");

var _constant = require("./util/constant");

var _config = require("./util/config");

function log(key) {
  var enableLog = _config.region.enableLog;

  if (process.env.NODE_ENV !== 'production' && enableLog) {
    (0, _logger.debug)(_constant.setLoading, key);
  }
}

function groupLog(key, result, nextState) {
  var enableLog = _config.region.enableLog;

  if (process.env.NODE_ENV !== 'production' && enableLog) {
    (0, _logger.group)(_constant.setResult, key, result, nextState);
  }
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constant.setLoading) {
    var key = action.payload.key;
    log(key);
    return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
  }

  if (action.type === _constant.setResult) {
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

exports.reducer = reducer;