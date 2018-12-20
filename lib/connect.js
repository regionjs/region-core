"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectWith = void 0;

var _reactRedux = require("react-redux");

var _region = require("./util/region");

var _hoc = _interopRequireDefault(require("./hoc"));

var _isValidConnectKey = require("./util/isValidConnectKey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectWith = function connectWith(key, DisplayComponent, LoadingComponent) {
  if ((0, _isValidConnectKey.isValidConnectKey)(key)) {
    var WrapperComponent = (0, _hoc.default)(DisplayComponent, LoadingComponent);
    return (0, _reactRedux.connect)((0, _region.mapResultToProps)(key))(WrapperComponent);
  }

  console.warn('key should be string or array of string');
  return (0, _reactRedux.connect)(key)(DisplayComponent);
};

exports.connectWith = connectWith;