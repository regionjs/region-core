"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var store_1 = require("./store");
exports["default"] = (function (options) {
    if (options === void 0) { options = {}; }
    var _a = options.store, store = _a === void 0 ? redux_1.createStore(function () { }) : _a, _b = options.reducers, reducers = _b === void 0 ? {} : _b;
    store.reducers = reducers;
    store_1.setStore(store);
});
