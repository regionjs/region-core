"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(DisplayComponent, LoadingComponent) {
  var ConnectWith = function ConnectWith(props) {
    var loading = props.loading;
    return loading ? _react.default.createElement(LoadingComponent, props) : _react.default.createElement(DisplayComponent, props);
  };

  return ConnectWith;
};

exports.default = _default;