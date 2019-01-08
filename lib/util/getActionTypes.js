"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var generator = function generator(name, type) {
  return name ? "@".concat(name, "/").concat(type) : "@region/".concat(type);
};

var _default = function _default(name) {
  return {
    LOAD_START: generator(name, 'LOAD_START'),
    LOAD_END: generator(name, 'LOAD_END'),
    SET: generator(name, 'SET'),
    ERROR: generator(name, 'ERROR')
  };
};

exports.default = _default;