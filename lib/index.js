"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "load", {
  enumerable: true,
  get: function get() {
    return _load.load;
  }
});
Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function get() {
    return _load.set;
  }
});
Object.defineProperty(exports, "mapResultToProps", {
  enumerable: true,
  get: function get() {
    return _getThingsFromState.mapResultToProps;
  }
});
Object.defineProperty(exports, "getLoading", {
  enumerable: true,
  get: function get() {
    return _getThingsFromState.getLoading;
  }
});
Object.defineProperty(exports, "getResults", {
  enumerable: true,
  get: function get() {
    return _getThingsFromState.getResults;
  }
});
Object.defineProperty(exports, "getFetchTimes", {
  enumerable: true,
  get: function get() {
    return _getThingsFromState.getFetchTimes;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.reducer;
  }
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _Provider.Provider;
  }
});
Object.defineProperty(exports, "connectWith", {
  enumerable: true,
  get: function get() {
    return _connect.connectWith;
  }
});
Object.defineProperty(exports, "setConfig", {
  enumerable: true,
  get: function get() {
    return _config.setConfig;
  }
});

require("@babel/polyfill");

var _load = require("./load");

var _getThingsFromState = require("./util/getThingsFromState");

var _reducer = require("./reducer");

var _Provider = require("./Provider");

var _connect = require("./connect");

var _config = require("./util/config");