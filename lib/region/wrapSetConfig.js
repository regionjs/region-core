"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = require("../global/store");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var Region = function Region(_config) {
    var _this = this;

    _classCallCheck(this, Region);

    _defineProperty(this, "private_setConfig", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var reducerPath = config.reducerPath,
          expiredTime = config.expiredTime,
          enableLog = config.enableLog,
          strictLoading = config.strictLoading,
          silentConnect = config.silentConnect;

      if (reducerPath !== undefined) {
        _this.reducerPath = reducerPath;
        _this.SET_LOADING = reducerPath ? "@".concat(reducerPath, "/SET_LOADING") : '@region/SET_LOADING';
        _this.SET_RESULT = reducerPath ? "@".concat(reducerPath, "/SET_RESULT") : '@region/SET_RESULT';
      }

      if (expiredTime !== undefined) {
        _this.expiredTime = expiredTime;
      }

      if (enableLog !== undefined) {
        _this.enableLog = enableLog;
      }

      if (strictLoading !== undefined) {
        _this.strictLoading = strictLoading;
      }

      if (silentConnect !== undefined) {
        _this.silentConnect = silentConnect;
      }
    });

    _defineProperty(this, "setConfig", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn('setConfig is deprecated, use private_setConfig instead');
      var private_setConfig = _this.private_setConfig;
      var store = config.store;

      if (store !== undefined) {
        console.warn('setStore in setConfig is deprecated, use getProvider or setStore instead');
        (0, _store.setStore)(store);
      }

      private_setConfig(config);
    });

    this.private_setConfig({
      reducerPath: null,
      expiredTime: 0,
      enableLog: true,
      strictLoading: true,
      silentConnect: false
    });
    this.private_setConfig(_config);
  };

  return Region;
};

exports.default = _default;