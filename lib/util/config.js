"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.region = void 0;
var region = {
  store: null,
  reducerPath: null,
  enableLog: true,
  expiredTime: 5 * 60 * 1000,
  strictLoading: true,
  silentConnect: false
};
exports.region = region;

var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = config.store,
      reducerPath = config.reducerPath,
      expiredTime = config.expiredTime,
      enableLog = config.enableLog,
      strictLoading = config.strictLoading,
      silentConnect = config.silentConnect;

  if (store !== undefined) {
    region.store = store;
  }

  if (reducerPath !== undefined) {
    region.reducerPath = reducerPath;
  }

  if (expiredTime !== undefined) {
    region.expiredTime = expiredTime;
  }

  if (enableLog !== undefined) {
    region.enableLog = enableLog;
  }

  if (strictLoading !== undefined) {
    region.strictLoading = strictLoading;
  }

  if (silentConnect !== undefined) {
    region.silentConnect = silentConnect;
  }
};

exports.setConfig = setConfig;