"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = function (_a) {
    var snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var reducer = option.reducer;
    if (typeof result === 'function') {
        // never
        return result(snapshot, result, params);
    }
    if (typeof reducer === 'function') {
        var formatted = reducer(snapshot, result, params);
        return formatted;
    }
    return result;
};
exports.selectPayload = function (_a) {
    var key = _a.key, snapshot = _a.snapshot, result = _a.result, params = _a.params, option = _a.option;
    var formattedResult = exports.formatResult({ snapshot: snapshot, result: result, params: params, option: option });
    return { key: key, result: formattedResult };
};
