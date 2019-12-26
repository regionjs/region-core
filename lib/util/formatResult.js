"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatResult = function (_a) {
    var key = _a.key, snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var format = option.format, reducer = option.reducer;
    if (typeof result === 'function') {
        // never
        return result(snapshot);
    }
    if (typeof reducer === 'function') {
        var formatted_1 = reducer(snapshot, result, params);
        return formatted_1;
    }
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    return formatted;
};
var getId = function (_a) {
    var id = _a.id, params = _a.params;
    if (typeof id === 'function') {
        return id(params);
    }
    // undefined as 'undefined'
    return id;
};
var getResult = function (_a) {
    var key = _a.key, result = _a.result, snapshot = _a.snapshot, params = _a.params, option = _a.option;
    var format = option.format, reducer = option.reducer;
    if (typeof reducer === 'function') {
        return reducer(snapshot, result, params);
    }
    return typeof format === 'function' ? format(result, snapshot) : result;
};
var getPayloadWithId = function (_a) {
    var key = _a.key, result = _a.result, snapshot = _a.snapshot, params = _a.params, option = _a.option;
    var id = option.id;
    var formatId = getId({ id: id, params: params });
    var formattedResult = getResult({ key: key, result: result, snapshot: snapshot, params: params, option: option });
    return { key: key, id: formatId, result: formattedResult };
};
exports.getPayload = function (_a) {
    var key = _a.key, snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var id = option.id;
    if (id !== undefined) {
        return getPayloadWithId({ key: key, result: result, snapshot: snapshot, params: params, option: option });
    }
    var formattedResult = formatResult({ key: key, snapshot: snapshot, result: result, params: params, option: option });
    return { key: key, result: formattedResult };
};
exports.getLoadPayload = function (_a) {
    var key = _a.key, promise = _a.promise, params = _a.params, option = _a.option;
    var id = option.id;
    var formatId = getId({ id: id, params: params });
    return { key: key, promise: promise, id: formatId };
};
