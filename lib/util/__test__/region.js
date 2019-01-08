"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.region = void 0;

var _redux = require("redux");

var _region = _interopRequireDefault(require("../../region"));

var _store = require("../../global/store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _store.setStore)((0, _redux.createStore)(function () {}));
var region = new _region.default(null);
exports.region = region;