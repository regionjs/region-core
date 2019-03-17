"use strict";
exports.__esModule = true;
exports.isAsync = function (asyncFunction) {
    if (asyncFunction && typeof asyncFunction === 'object' && typeof asyncFunction.then === 'function') {
        return true;
    }
    return typeof asyncFunction === 'function';
};
