"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidConnectKey = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isValidConnectKeyObject = function isValidConnectKeyObject(key) {
  if (key === null) return false;

  if (typeof key === 'function' || _typeof(key) === 'object') {
    return 'loading' in key || 'result' in key || 'entity' in key || 'selector' in key;
  }

  return false;
};

var isValidConnectKey = function isValidConnectKey(key) {
  return typeof key === 'string' || Array.isArray(key) || isValidConnectKeyObject(key);
};

exports.isValidConnectKey = isValidConnectKey;