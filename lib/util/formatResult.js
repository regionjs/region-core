"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = function (_a) {
    var result = _a.result, snapshot = _a.snapshot, format = _a.format;
    if (typeof result === 'function') {
        return result(snapshot);
    }
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    return formatted;
};
exports.formatResultWithId = function (_a) {
    var result = _a.result, snapshot = _a.snapshot, format = _a.format, id = _a.id;
    var _b;
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    // NOTE should return a different object or useProps may? broke
    return Object.assign({}, snapshot, (_b = {}, _b[id] = formatted, _b));
};
