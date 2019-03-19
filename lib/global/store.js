"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store = null;
exports.setStore = function (_store) {
    store = _store;
};
exports.getStore = function () {
    if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
        throw Error('getProvider must be called before new Region()');
    }
    return store;
};
