"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _store = require("./store");

var _default = function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$store = options.store,
      store = _options$store === void 0 ? (0, _redux.createStore)(function () {}) : _options$store,
      _options$reducers = options.reducers,
      reducers = _options$reducers === void 0 ? {} : _options$reducers;
  store.reducers = reducers;
  (0, _store.setStore)(store);
};

exports.default = _default;