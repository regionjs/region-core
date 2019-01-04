"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.getProvider;
  }
});
Object.defineProperty(exports, "Region", {
  enumerable: true,
  get: function get() {
    return _region.default;
  }
});

require("@babel/polyfill");

var _Provider = require("./global/Provider");

var _region = _interopRequireDefault(require("./region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }