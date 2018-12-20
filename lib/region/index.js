"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RegionInitial = _interopRequireDefault(require("./RegionInitial"));

var _wrapSetConfig = _interopRequireDefault(require("./wrapSetConfig"));

var _wrapGet = _interopRequireDefault(require("./wrapGet"));

var _wrapMapResultToProps = _interopRequireDefault(require("./wrapMapResultToProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var _default = compose(_wrapMapResultToProps.default, _wrapGet.default, _wrapSetConfig.default)(_RegionInitial.default);

exports.default = _default;