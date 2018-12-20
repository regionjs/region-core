"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectWith = void 0;

var _reactRedux = require("react-redux");

var _region = require("./util/region");

var _hoc = _interopRequireDefault(require("./hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isValidKeyObject = function isValidKeyObject(key) {
  if (key === null) return false;

  if (typeof key === 'function' || _typeof(key) === 'object') {
    return 'loading' in key || 'result' in key || 'entity' in key || 'selector' in key;
  }

  return false;
};

var connectWith = function connectWith(key, DisplayComponent, LoadingComponent) {
  if (typeof key === 'string' || Array.isArray(key) || isValidKeyObject(key)) {
    var WrapperComponent = (0, _hoc.default)(DisplayComponent, LoadingComponent);
    return (0, _reactRedux.connect)((0, _region.mapResultToProps)(key))(WrapperComponent);
  }

  console.warn('key should be string or array of string');
  return (0, _reactRedux.connect)(key)(DisplayComponent);
};

exports.connectWith = connectWith;