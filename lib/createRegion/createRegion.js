"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createMappedRegion_1 = require("../createMappedRegion");
var hoc_1 = require("./hoc");
function createRegion(initialValue) {
    var region;
    if (initialValue !== undefined) {
        region = createMappedRegion_1.default(initialValue);
    }
    else {
        region = createMappedRegion_1.default();
    }
    var set = function (resultOrFunc) {
        return region.set('value', resultOrFunc);
    };
    var reset = region.reset;
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
    var getMap = function () {
        return region.getMap('value');
    };
    var getId = function () {
        return region.getId('value');
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
    var useMap = function () {
        return region.useMap('value');
    };
    var useId = function () {
        return region.useId('value');
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
    return {
        set: set,
        reset: reset,
        load: load,
        loadBy: loadBy,
        getMap: getMap,
        getId: getId,
        getValue: getValue,
        getLoading: getLoading,
        getError: getError,
        getFetchTime: getFetchTime,
        getProps: getProps,
        connect: connect,
        useMap: useMap,
        useId: useId,
        useValue: useValue,
        useLoading: useLoading,
        useError: useError,
        useFetchTime: useFetchTime,
        useProps: useProps,
    };
}
exports.default = createRegion;
