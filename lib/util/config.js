"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  reducerPath: null,
  enableLog: true,
  expiredTime: 5 * 60 * 1000
};

exports.default = config;
var setConfig = exports.setConfig = function setConfig() {
  var configObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var reducerPath = configObj.reducerPath,
      expiredTime = configObj.expiredTime,
      enableLog = configObj.enableLog;

  if (reducerPath !== undefined) {
    config.reducerPath = reducerPath;
  }
  if (expiredTime !== undefined) {
    config.expiredTime = expiredTime;
  }
  if (enableLog !== undefined) {
    config.enableLog = enableLog;
  }
};