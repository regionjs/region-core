"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProvider = function getProvider() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  console.warn('getProvider is deprecated, use provide instead. region is not using react-redux api anymore');
  var _options$store = options.store,
      store = _options$store === void 0 ? (0, _redux.createStore)(function () {}) : _options$store,
      _options$reducers = options.reducers,
      reducers = _options$reducers === void 0 ? {} : _options$reducers;
  store.reducers = reducers;
  (0, _store.setStore)(store);
  return function (_ref) {
    var children = _ref.children;
    return _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, children);
  };
};

exports.getProvider = getProvider;