"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = exports.getReducerObject = exports.setReducerObject = exports.getStore = exports.setStore = void 0;

var _redux = require("redux");

// eslint-disable-next-line import/no-mutable-exports
var store = null;

var setStore = function setStore(_store) {
  store = _store;
};

exports.setStore = setStore;

var getStore = function getStore() {
  if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
    throw Error('setConfig({ store }) must be called');
  }

  return store;
};

exports.getStore = getStore;
var reducerObject = null;

var setReducerObject = function setReducerObject(_reducerObject) {
  reducerObject = _reducerObject;
};

exports.setReducerObject = setReducerObject;

var getReducerObject = function getReducerObject() {
  return reducerObject;
};

exports.getReducerObject = getReducerObject;

var replace = function replace() {
  var reducer = (0, _redux.combineReducers)(reducerObject);
  store.replaceReducer(reducer);
  setStore(store);
};

exports.replace = replace;