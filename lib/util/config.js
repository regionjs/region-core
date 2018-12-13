"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.region = void 0;

var _region = _interopRequireDefault(require("../region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var region = new _region.default();
exports.region = region;
var setConfig = region.setConfig;
exports.setConfig = setConfig;