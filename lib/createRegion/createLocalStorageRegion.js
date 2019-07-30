"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createRegion_1 = require("./createRegion");
var localStorage = typeof window === 'object' && window.localStorage;
var setLocalStorageState = function (key, value) {
    var jsonString = JSON.stringify(value);
    // JSON.stringify(undefined) === undefined
    // JSON.stringify(null) === 'null'
    if (typeof jsonString === 'string') {
        localStorage && localStorage.setItem(key, jsonString);
    }
    else {
        localStorage && localStorage.removeItem(key);
    }
};
var getLocalStorageState = function (key, fallbackValue) {
    try {
        var jsonString = localStorage && localStorage.getItem(key);
        if (jsonString === null) {
            // when jsonString === null => item is undefined
            // when jsonString === 'null' => item is null
            setLocalStorageState(key, fallbackValue);
            return fallbackValue;
        }
        // @ts-ignore
        return JSON.parse(jsonString);
    }
    catch (e) {
        setLocalStorageState(key, fallbackValue);
        return fallbackValue;
    }
};
var createLocalStorageRegion = function (key, fallbackValue) {
    var region = createRegion_1.default(getLocalStorageState(key, fallbackValue));
    var regionSet = region.set;
    region.set = function (valueOrFunc) {
        if (typeof valueOrFunc === 'function') {
            var value = valueOrFunc(getLocalStorageState(key, fallbackValue));
            setLocalStorageState(key, value);
            regionSet(value);
            return;
        }
        setLocalStorageState(key, valueOrFunc);
        regionSet(valueOrFunc);
    };
    typeof window === 'object' && window.addEventListener('storage', function () {
        var value = getLocalStorageState(key, fallbackValue);
        regionSet(value);
    });
    return region;
};
exports.default = createLocalStorageRegion;
