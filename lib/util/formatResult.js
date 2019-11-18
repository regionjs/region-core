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
var getId = function (_a) {
    var id = _a.id, params = _a.params;
    if (typeof id === 'function') {
        return id(params);
    }
    return id;
};
var getPayloadWithId = function (_a) {
    var _b;
    var key = _a.key, resultOrFunc = _a.resultOrFunc, snapshot = _a.snapshot, params = _a.params, option = _a.option;
    var format = option.format, reducer = option.reducer, id = option.id;
    var formatId = getId({ id: id, params: params });
    var formatted;
    if (typeof reducer === 'function') {
        formatted = reducer(snapshot, resultOrFunc, params);
    }
    else {
        formatted = typeof format === 'function' ? format(resultOrFunc, snapshot) : resultOrFunc;
    }
    // NOTE should return a different object or useProps may? broke
    var formattedResult = Object.assign({}, snapshot, (_b = {}, _b[formatId] = formatted, _b));
    return { key: key, results: formattedResult, id: formatId, result: formatted };
};
exports.getPayload = function (_a) {
    var key = _a.key, snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var format = option.format, reducer = option.reducer, id = option.id;
    if (id !== undefined) {
        return getPayloadWithId({ key: key, resultOrFunc: result, snapshot: snapshot, format: format, id: id, reducer: reducer, params: params, option: option });
    }
    var formattedResult = exports.formatResult({ resultOrFunc: result, snapshot: snapshot, format: format, reducer: reducer, params: params });
    return { key: key, result: formattedResult };
};
exports.getLoadPayload = function (_a) {
    var key = _a.key, promise = _a.promise, params = _a.params, option = _a.option;
    var id = option.id;
    var formatId = getId({ id: id, params: params });
    return { key: key, promise: promise, id: formatId };
};
