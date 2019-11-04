"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = function (_a) {
    var resultOrFunc = _a.resultOrFunc, snapshot = _a.snapshot, format = _a.format, reducer = _a.reducer, params = _a.params;
    if (typeof resultOrFunc === 'function') {
        return resultOrFunc(snapshot);
    }
    if (typeof reducer === 'function') {
        var formatted_1 = reducer(snapshot, resultOrFunc, params);
        return formatted_1;
    }
    var formatted = typeof format === 'function' ? format(resultOrFunc, snapshot) : resultOrFunc;
    return formatted;
};
exports.formatResultWithId = function (_a) {
    var _b, _c;
    var resultOrFunc = _a.resultOrFunc, snapshot = _a.snapshot, format = _a.format, id = _a.id, reducer = _a.reducer, params = _a.params;
    if (typeof reducer === 'function') {
        var formatted_2 = reducer(snapshot, resultOrFunc, params);
        // NOTE should return a different object or useProps may? broke
        return Object.assign({}, snapshot, (_b = {}, _b[id] = formatted_2, _b));
    }
    var formatted = typeof format === 'function' ? format(resultOrFunc, snapshot) : resultOrFunc;
    // NOTE should return a different object or useProps may? broke
    return Object.assign({}, snapshot, (_c = {}, _c[id] = formatted, _c));
};
