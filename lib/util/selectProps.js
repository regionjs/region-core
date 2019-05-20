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
var selectLoading = function (loadings) { return loadings.reduce(function (a, b) { return a || b; }, false); };
var selectError = function (errors) {
    var filteredErrors = errors.filter(function (e) { return e; });
    if (filteredErrors.length > 0) {
        return filteredErrors.map(function (e) { return e.message; }).join(', ');
    }
    return undefined;
};
var selectFetchTime = function (fetchTimes) {
    var fetchTime = fetchTimes.reduce(function (a, b) { return a > b ? a : b; }, 0);
    return fetchTime || undefined;
};
var selectResult = function (keys, results) {
    var _a;
    if (Array.isArray(keys)) {
        var props_1 = {};
        keys.forEach(function (key, index) {
            props_1[key] = results[index];
        });
        return props_1;
    }
    return _a = {}, _a[keys] = results, _a;
};
exports.selectProps = function (_a) {
    var keys = _a.keys, loadings = _a.loadings, results = _a.results, fetchTimes = _a.fetchTimes, errors = _a.errors;
    var loading = Array.isArray(loadings) ? selectLoading(loadings) : loadings;
    var error = Array.isArray(errors) ? selectError(errors) : errors && errors.message;
    var fetchTime = Array.isArray(fetchTimes) ? selectFetchTime(fetchTimes) : fetchTimes;
    var resultMap = selectResult(keys, results);
    return __assign({ loading: loading, fetchTime: fetchTime, error: error }, resultMap);
};
exports.formatLoading = function (loading, strictLoading) {
    if (loading) {
        return true;
    }
    if (loading === undefined) {
        if (strictLoading) { // treat undefined as true or as undefined
            return true;
        }
        return undefined;
    }
    return false;
};
var getValue = function (state, category, key) {
    var values = state[key] || {};
    return values[category];
};
exports.mapValues = function (state, category, key, format) {
    if (state === void 0) { state = {}; }
    if (format === void 0) { format = function (v) { return v; }; }
    if (Array.isArray(key)) {
        return key.map(function (i) { return getValue(state, category, i); }).map(format);
    }
    return format(getValue(state, category, key));
};
exports.formatKeys = function (key) {
    if (typeof key === 'string') {
        return {
            keys: [key],
            loadings: [key],
            results: [key],
            fetchTimes: [key],
            errors: [key],
        };
    }
    if (Array.isArray(key)) {
        return {
            keys: key,
            loadings: key,
            results: key,
            fetchTimes: key,
            errors: key,
        };
    }
    var keys = key.result || key.key || [];
    var loadings = key.loading || key.key || [];
    var results = key.result || key.key || [];
    var fetchTimes = key.fetchTime || key.key || [];
    var errors = key.error || key.key || [];
    keys = Array.isArray(keys) ? keys : [keys];
    loadings = Array.isArray(loadings) ? loadings : [loadings];
    results = Array.isArray(results) ? results : [results];
    fetchTimes = Array.isArray(fetchTimes) ? fetchTimes : [fetchTimes];
    errors = Array.isArray(errors) ? errors : [errors];
    return { keys: keys, loadings: loadings, results: results, fetchTimes: fetchTimes, errors: errors };
};
