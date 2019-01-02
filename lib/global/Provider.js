"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProvider = exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _region = require("./region");

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO move to region-simple
var Provider = function Provider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, children);
};

exports.Provider = Provider;

var getProvider = function getProvider() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$store = _ref2.store,
      store = _ref2$store === void 0 ? _store.store : _ref2$store,
      reducers = _ref2.reducers;

  var reducer = (0, _redux.combineReducers)(_objectSpread({}, reducers, {
    region: _region.region.reducer
  }));

  if (store) {
    store.replaceReducer(reducer);
    (0, _store.setStore)(store);
  } else {
    var nextStore = (0, _redux.createStore)(reducer);
    (0, _store.setStore)(nextStore);
  }

  return Provider;
};

exports.getProvider = getProvider;