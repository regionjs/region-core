"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator = function (name, type) { return (name ? "@" + name + "/" + type : "@region/" + type); };
exports.default = (function (name) { return ({
    LOAD: generator(name, 'LOAD'),
    SET: generator(name, 'SET'),
    RESET: generator(name, 'RESET'),
}); });
