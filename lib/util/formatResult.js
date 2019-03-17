"use strict";
exports.__esModule = true;
exports.formatResult = function (_a) {
    var result = _a.result, snapshot = _a.snapshot, format = _a.format, error = _a.error, id = _a.id;
    var _b;
    var formatted = typeof format === 'function' ? format(result, snapshot, error) : result;
    if (id !== undefined) {
        return Object.assign((_b = {}, _b[id] = formatted, _b), snapshot);
    }
    return formatted;
};
