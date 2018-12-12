"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("./util/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var empty = function empty() {
  return null;
};

var _default = function _default() {
  var DisplayComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
  var LoadingComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.region.silentConnect ? empty : DisplayComponent;

  var ConnectWith = function ConnectWith(props) {
    var loading = props.loading;
    return loading ? _react.default.createElement(LoadingComponent, props) : _react.default.createElement(DisplayComponent, props);
  };

  return ConnectWith;
};

exports.default = _default;