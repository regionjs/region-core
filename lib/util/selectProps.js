"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatLoading = function (loading) {
    // treat undefined as true
    if (loading === undefined) {
        return true;
    }
    return loading > 0;
};
exports.selectLoading = function (loadings) { return loadings.reduce(function (a, b) {
    var currentLoading = formatLoading(b);
    return a || currentLoading;
}, false); };
exports.selectError = function (errors) {
    var filteredErrors = errors.filter(function (e) { return e; });
    if (filteredErrors.length === 1) {
        var e = errors[0];
        return typeof e === 'string' ? new Error(e) : e;
    }
    if (filteredErrors.length > 1) {
        console.warn('select multiple error may cause problems.');
        // e, as agreed, should be Error. but when it isn't, return e as string
        var errorMessage = filteredErrors.map(function (e) { return typeof e === 'string' ? e : e.message; }).join(', ');
        return new Error(errorMessage);
    }
    return undefined;
};
exports.selectFetchTime = function (fetchTimes) {
    var fetchTime = fetchTimes.reduce(function (a, b) {
        if (a === undefined) {
            return b;
        }
        if (b === undefined) {
            return a;
        }
        return a > b ? a : b;
    }, undefined);
    return fetchTime;
};
exports.selectResult = function (keys, results) {
    var props = {};
    keys.forEach(function (key, index) {
        props[key] = results[index];
    });
    return props;
};
exports.formatLegacyKeys = function (key) {
    if (Array.isArray(key)) {
        return {
            keys: key,
            loadings: key,
            results: key,
            fetchTimes: key,
            errors: key,
        };
    }
    return {
        keys: [key],
        loadings: [key],
        results: [key],
        fetchTimes: [key],
        errors: [key],
    };
};
