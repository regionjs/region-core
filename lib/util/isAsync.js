"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsync = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isAsync = function isAsync(asyncFunction) {
  if (asyncFunction && _typeof(asyncFunction) === 'object' && typeof asyncFunction.then === 'function') {
    return true;
  }

  return typeof asyncFunction === 'function';
};

exports.isAsync = isAsync;