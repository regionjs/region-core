"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createCombinedRegion_1 = require("../createCombinedRegion");
var hoc_1 = require("./hoc");
exports.createRegion = function (initialValue) {
    var region = createCombinedRegion_1.default();
    var set = function (resultOrFunc) {
        return region.set('value', resultOrFunc);
    };
    var load = function (asyncFunction, option, exOption) {
        if (option === void 0) { option = {}; }
        return region.load('value', asyncFunction, option, exOption);
    };
    var loadBy = function (asyncFunction, option, exOption) {
        if (option === void 0) { option = {}; }
        return region.loadBy('value', asyncFunction, option, exOption);
    };
    var getProps = function () {
        return region.getProps('value');
    };
    var getValue = function () {
        return region.getValue('value');
    };
    var getLoading = function () {
        return region.getLoading('value');
    };
    var getError = function () {
        return region.getError('value');
    };
    var getFetchTime = function () {
        return region.getFetchTime('value');
    };
    var useProps = function () {
        return region.useProps('value');
    };
    var useValue = function () {
        return region.useValue('value');
    };
    var useLoading = function () {
        return region.useLoading('value');
    };
    var useError = function () {
        return region.useError('value');
    };
    var useFetchTime = function () {
        return region.useFetchTime('value');
    };
    var connect = function (Component, alias) {
        if (alias === void 0) { alias = 'value'; }
        return hoc_1.hoc({ Component: Component, alias: alias, useProps: useProps });
    };
    if (initialValue !== undefined) {
        set(initialValue);
    }
    return {
        set: set,
        load: load,
        loadBy: loadBy,
        getProps: getProps,
        getValue: getValue,
        getLoading: getLoading,
        getError: getError,
        getFetchTime: getFetchTime,
        useProps: useProps,
        useValue: useValue,
        useLoading: useLoading,
        useError: useError,
        useFetchTime: useFetchTime,
        connect: connect,
    };
};
exports.default = exports.createRegion;
