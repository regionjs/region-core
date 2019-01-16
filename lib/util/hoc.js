"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(Display, Loading, Error) {
  var ConnectWith = function ConnectWith(props) {
    var loading = props.loading,
        error = props.error;

    if (loading) {
      return _react.default.createElement(Loading, props);
    }

    if (error) {
      return _react.default.createElement(Error, props);
    }

    return _react.default.createElement(Display, props);
  };

  return ConnectWith;
};

exports.default = _default;