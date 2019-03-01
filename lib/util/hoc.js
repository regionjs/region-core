"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.prehoc = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prehoc = function prehoc(Display, Loading, Error) {
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

exports.prehoc = prehoc;

var _default = function _default(_ref) {
  var Display = _ref.Display,
      Loading = _ref.Loading,
      Error = _ref.Error,
      useProps = _ref.useProps,
      key = _ref.key;

  var ConnectWith = function ConnectWith(ownProps) {
    var props = useProps(key);
    var loading = props.loading,
        error = props.error;

    if (loading) {
      return _react.default.createElement(Loading, _extends({}, props, ownProps));
    }

    if (error) {
      return _react.default.createElement(Error, _extends({}, props, ownProps));
    }

    return _react.default.createElement(Display, _extends({}, props, ownProps));
  };

  return ConnectWith;
};

exports.default = _default;