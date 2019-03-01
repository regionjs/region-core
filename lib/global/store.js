"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = exports.setStore = void 0;
var store = null;

var setStore = function setStore(_store) {
  store = _store;
};

exports.setStore = setStore;

var getStore = function getStore() {
  if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
    throw Error('getProvider must be called before new Region()');
  }

  return store;
};

exports.getStore = getStore;