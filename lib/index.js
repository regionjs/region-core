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
    return _set.set;
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
    return _region.setConfig;
  }
});
Object.defineProperty(exports, "getLoading", {
  enumerable: true,
  get: function get() {
    return _region.getLoading;
  }
});
Object.defineProperty(exports, "getResults", {
  enumerable: true,
  get: function get() {
    return _region.getResults;
  }
});
Object.defineProperty(exports, "getFetchTimes", {
  enumerable: true,
  get: function get() {
    return _region.getFetchTimes;
  }
});
Object.defineProperty(exports, "mapResultToProps", {
  enumerable: true,
  get: function get() {
    return _region.mapResultToProps;
  }
});

require("@babel/polyfill");

var _load = require("./load");

var _set = require("./util/set");

var _reducer = require("./reducer");

var _Provider = require("./Provider");

var _connect = require("./connect");

var _region = require("./util/region");