"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wrapSetConfig = _interopRequireDefault(require("./wrapSetConfig"));

var _wrapReducer = _interopRequireDefault(require("./wrapReducer"));

var _wrapGet = _interopRequireDefault(require("./wrapGet"));

var _wrapPrivate = _interopRequireDefault(require("./wrapPrivate"));

var _wrapPublic = _interopRequireDefault(require("./wrapPublic"));

var _wrapConnect = _interopRequireDefault(require("./wrapConnect"));

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

var _default = compose(_wrapConnect.default, _wrapPublic.default, _wrapPrivate.default, _wrapGet.default, _wrapReducer.default, _wrapSetConfig.default)();

exports.default = _default;