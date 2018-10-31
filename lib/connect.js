"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectWith = exports.connect = void 0;

var _reactRedux = require("react-redux");

var _getThingsFromState = require("./util/getThingsFromState");

var _hoc = _interopRequireDefault(require("./hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  console.warn('connect is deprecated, use connectWith instead');

  if (typeof mapStateToProps === 'string' || Array.isArray(mapStateToProps)) {
    return (0, _reactRedux.connect)((0, _getThingsFromState.mapResultToProps)(mapStateToProps), mapDispatchToProps, mergeProps, options);
  }

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options);
};

exports.connect = connect;

var connectWith = function connectWith(key, DisplayComponent, LoadingComponent) {
  // eslint-disable-line
  if (typeof key === 'string' || Array.isArray(key)) {
    var WrapperComponent = (0, _hoc.default)(DisplayComponent, LoadingComponent);
    return (0, _reactRedux.connect)((0, _getThingsFromState.mapResultToProps)(key))(WrapperComponent);
  }

  console.warn('key should be string or array of string');
  return (0, _reactRedux.connect)(key)(DisplayComponent);
};

exports.connectWith = connectWith;