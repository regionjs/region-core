"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducer = require("./reducer");

var _region = require("./util/region");

var reducer = (0, _redux.combineReducers)({
  results: _reducer.reducer
});
var store = (0, _redux.createStore)(reducer);
(0, _region.setConfig)({
  store: store,
  reducerPath: 'results'
});
var _default = store;
exports.default = _default;