"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator = function (name, type) { return "@" + name + "/" + type; };
exports.getActionTypes = function (name) {
    if (name === void 0) { name = 'region'; }
    return ({
        LOAD: generator(name, 'LOAD'),
        SET: generator(name, 'SET'),
        RESET: generator(name, 'RESET'),
    });
};
