"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE 只支持 path.length === 2 和 value
exports.setValueDeep = function (state, path, value) {
    var obj = state;
    var i;
    for (i = 0; i < path.length - 1; i += 1) {
        if (obj[path[i]] === undefined) {
            obj[path[i]] = {};
        }
        obj = obj[path[i]];
    }
    if (typeof value === 'function') {
        obj[path[i]] = value(obj[path[i]]);
    }
    else {
        obj[path[i]] = value;
    }
    return null;
};
