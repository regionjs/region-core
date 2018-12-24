"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _region = require("./region");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  results: _region.region.reducer
});
var store = (0, _redux.createStore)(reducer);

_region.region.setConfig({
  store: store,
  reducerPath: 'results'
});

var Provider = function Provider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, children);
};

exports.Provider = Provider;