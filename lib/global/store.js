"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var store = null;
exports.setStore = function (nextStore) {
    store = nextStore;
};
exports.getStore = function () {
    if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
        throw Error('getProvider must be called before new Region()');
    }
    return store;
};
exports.injectStore = function (name, private_reducer) {
    var _a;
    var store = exports.getStore();
    var reducers = store.reducers;
    store.reducers = __assign({}, reducers, (_a = {}, _a[name] = private_reducer, _a));
    var reducer = redux_1.combineReducers(store.reducers);
    store.replaceReducer(reducer);
};
