"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/no-mutable-exports */
var reducerPath = exports.reducerPath = null;
var enableLog = exports.enableLog = true;
var expiredTime = exports.expiredTime = 5 * 60 * 1000;

var setConfig = exports.setConfig = function setConfig() {
  var configObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _reducerPath = configObj.reducerPath,
      _expiredTime = configObj.expiredTime,
      _enableLog = configObj.enableLog;

  if (_reducerPath !== undefined) {
    exports.reducerPath = reducerPath = _reducerPath;
  }
  if (_expiredTime !== undefined) {
    exports.expiredTime = expiredTime = _expiredTime;
  }
  if (_enableLog !== undefined) {
    exports.enableLog = enableLog = _enableLog;
  }
};