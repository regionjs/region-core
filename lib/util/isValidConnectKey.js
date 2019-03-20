"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValidConnectKeyObject = function (key) {
    if (key === null)
        return false;
    if (typeof key === 'function' || typeof key === 'object') {
        return 'loading' in key || 'result' in key || 'key' in key || 'selector' in key;
    }
    return false;
};
exports.isValidConnectKey = function (key) { return typeof key === 'string' || Array.isArray(key) || isValidConnectKeyObject(key); };
