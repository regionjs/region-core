"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = exports.setStore = exports.store = void 0;
// eslint-disable-next-line import/no-mutable-exports
var store = null;
exports.store = store;

var setStore = function setStore(_store) {
  exports.store = store = _store;
};

exports.setStore = setStore;

var getStore = function getStore() {
  if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
    throw Error('setConfig({ store }) must be called');
  }

  return store;
};

exports.getStore = getStore;