"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Region = function Region() {
  _classCallCheck(this, Region);

  this.reducerPath = null;
  this.enableLog = true;
  this.expiredTime = 0;
  this.strictLoading = true;
  this.silentConnect = false;
};

var _default = Region;
exports.default = _default;