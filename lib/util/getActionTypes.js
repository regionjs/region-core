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
    LOAD: generator(name, 'LOAD'),
    SET: generator(name, 'SET')
  };
};

exports.default = _default;