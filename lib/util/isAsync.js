"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsync = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isAsync = function isAsync(Promise) {
  if (Promise && _typeof(Promise) === 'object' && typeof Promise.then === 'function') {
    return true;
  }

  return typeof Promise === 'function';
};

exports.isAsync = isAsync;