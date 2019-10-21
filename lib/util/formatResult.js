"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = function (_a) {
    var result = _a.result, snapshot = _a.snapshot, format = _a.format, reducer = _a.reducer, params = _a.params;
    if (typeof result === 'function') {
        return result(snapshot);
    }
    if (typeof reducer === 'function') {
        var formatted_1 = reducer(snapshot, result, params);
        return formatted_1;
    }
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    return formatted;
};
exports.formatResultWithId = function (_a) {
    var _b, _c;
    var result = _a.result, snapshot = _a.snapshot, format = _a.format, id = _a.id, reducer = _a.reducer, params = _a.params;
    if (typeof reducer === 'function') {
        var formatted_2 = reducer(snapshot, result, params);
        // NOTE should return a different object or useProps may? broke
        return Object.assign({}, snapshot, (_b = {}, _b[id] = formatted_2, _b));
    }
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    // NOTE should return a different object or useProps may? broke
    return Object.assign({}, snapshot, (_c = {}, _c[id] = formatted, _c));
};
