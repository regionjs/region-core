"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.setResult = exports.setLoading = exports.strictLoading = exports.expiredTime = exports.enableLog = exports.reducerPath = exports.store = void 0;

/* eslint-disable import/no-mutable-exports */
// NOTE mutable-exports is need
var store = null;
exports.store = store;
var reducerPath = null;
exports.reducerPath = reducerPath;
var enableLog = true;
exports.enableLog = enableLog;
var expiredTime = 5 * 60 * 1000;
exports.expiredTime = expiredTime;
var strictLoading = true;
exports.strictLoading = strictLoading;
var setLoading = 'SET_LOADING';
exports.setLoading = setLoading;
var setResult = 'SET_RESULT';
exports.setResult = setResult;

var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _store = config.store,
      _reducerPath = config.reducerPath,
      _expiredTime = config.expiredTime,
      _enableLog = config.enableLog,
      _strictLoading = config.strictLoading,
      _setLoading = config.setLoading,
      _setResult = config.setResult;

  if (_store !== undefined) {
    exports.store = store = _store;
  }

  if (_reducerPath !== undefined) {
    exports.reducerPath = reducerPath = _reducerPath;
  }

  if (_expiredTime !== undefined) {
    exports.expiredTime = expiredTime = _expiredTime;
  }

  if (_enableLog !== undefined) {
    exports.enableLog = enableLog = _enableLog;
  }

  if (_strictLoading !== undefined) {
    exports.strictLoading = strictLoading = _strictLoading;
  }

  if (_setLoading !== undefined) {
    exports.setLoading = setLoading = _setLoading;
  }

  if (_setResult !== undefined) {
    exports.setResult = setResult = _setResult;
  }
};

exports.setConfig = setConfig;