"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectLoading = function (loadings) { return loadings.reduce(function (a, b) { return a || b; }, false); };
exports.selectError = function (errors) {
    var filteredErrors = errors.filter(function (e) { return e; });
    if (filteredErrors.length > 0) {
        var errorMessage = filteredErrors.map(function (e) { return e.message; }).join(', ');
        return new Error(errorMessage);
    }
    return undefined;
};
exports.selectFetchTime = function (fetchTimes) {
    var fetchTime = fetchTimes.reduce(function (a, b) { return a > b ? a : b; }, 0);
    return fetchTime || undefined;
};
exports.selectResult = function (keys, results) {
    var props = {};
    keys.forEach(function (key, index) {
        props[key] = results[index];
    });
    return props;
};
exports.formatLoading = function (loading) {
    // treat undefined as true
    return loading || loading === undefined;
};
var getValue = function (state, key) {
    var values = state[key] || {};
    return values;
};
exports.mapValues = function (state, key, format) {
    if (state === void 0) { state = {}; }
    if (format === void 0) { format = function (v) { return v; }; }
    if (Array.isArray(key)) {
        return key.map(function (i) { return getValue(state, i); }).map(format);
    }
    return format(getValue(state, key));
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
