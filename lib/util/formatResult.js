"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatResult = function (_a) {
    var snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
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
exports.selectId = function (_a) {
    var id = _a.id, params = _a.params;
    if (typeof id === 'function') {
        return id(params);
    }
    // undefined as 'undefined'
    return id;
};
exports.selectPayload = function (_a) {
    var key = _a.key, snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var id = option.id;
    if (id !== undefined) {
        var id_1 = option.id, reducer = option.reducer, format = option.format;
        var formatId = exports.selectId({ id: id_1, params: params });
        var formattedResult_1 = typeof reducer === 'function'
            ? reducer(snapshot, result, params)
            : (typeof format === 'function'
                ? format(result, snapshot)
                : result);
        return { key: key, id: formatId, result: formattedResult_1 };
    }
    var formattedResult = formatResult({ snapshot: snapshot, result: result, params: params, option: option });
    return { key: key, result: formattedResult };
};
