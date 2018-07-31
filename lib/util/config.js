'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/no-mutable-exports */
// NOTE mutable-exports is need
var reducerPath = exports.reducerPath = null;
var enableLog = exports.enableLog = true;
var expiredTime = exports.expiredTime = 5 * 60 * 1000;
var setLoading = exports.setLoading = 'SET_LOADING';
var setResult = exports.setResult = 'SET_RESULT';

var setConfig = exports.setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _reducerPath = config.reducerPath,
      _expiredTime = config.expiredTime,
      _enableLog = config.enableLog,
      _setLoading = config.setLoading,
      _setResult = config.setResult;


  if (_reducerPath !== undefined) {
    exports.reducerPath = reducerPath = _reducerPath;
  }
  if (_expiredTime !== undefined) {
    exports.expiredTime = expiredTime = _expiredTime;
  }
  if (_enableLog !== undefined) {
    exports.enableLog = enableLog = _enableLog;
  }
  if (_setLoading !== undefined) {
    exports.setLoading = setLoading = _setLoading;
  }
  if (_setResult !== undefined) {
    exports.setResult = setResult = _setResult;
  }
};