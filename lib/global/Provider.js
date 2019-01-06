"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _store = require("./store");

var _region = _interopRequireDefault(require("../region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getProvider = function getProvider() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$store = _ref.store,
      store = _ref$store === void 0 ? (0, _redux.createStore)(function () {}) : _ref$store,
      reducers = _ref.reducers;

  (0, _store.setStore)(store);
  var region = new _region.default({
    reducerPath: 'region'
  });

  var reducerObject = _objectSpread({}, reducers, {
    region: region.reducer
  });

  (0, _store.setReducerObject)(reducerObject);
  var reducer = (0, _redux.combineReducers)(reducerObject);
  store.replaceReducer(reducer);
  return function (_ref2) {
    var children = _ref2.children;
    return _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, children);
  };
};

exports.getProvider = getProvider;