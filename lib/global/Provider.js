"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var store_1 = require("./store");
var deprecate_1 = require("../util/deprecate");
exports.getProvider = function (options) {
    if (options === void 0) { options = {}; }
    deprecate_1["default"]('getProvider is deprecated, use provide instead. region is not using react-redux api anymore.');
    var _a = options.store, store = _a === void 0 ? redux_1.createStore(function () { }) : _a, _b = options.reducers, reducers = _b === void 0 ? {} : _b;
    store.reducers = reducers;
    store_1.setStore(store);
    return function (_a) {
        var children = _a.children;
        return React.createElement(react_redux_1.Provider, { store: store }, children);
    };
};
