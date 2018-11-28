"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = function Provider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, children);
};

exports.Provider = Provider;