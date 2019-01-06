"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducerObject = exports.setReducerObject = exports.getStore = exports.setStore = void 0;
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