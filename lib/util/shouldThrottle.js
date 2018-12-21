"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldThrottle = void 0;

var _region = require("./region");

var isExpired = function isExpired(key) {
  var expiredTime = _region.region.expiredTime;
  var fetchTime = (0, _region.getFetchTimes)(key);
  var now = new Date().getTime();
  return now - fetchTime > expiredTime;
};

var shouldThrottle = function shouldThrottle(_ref) {
  var Promise = _ref.Promise,
      forceUpdate = _ref.forceUpdate,
      key = _ref.key,
      snapshot = _ref.snapshot;
  return Boolean(typeof Promise === 'function' && !forceUpdate && !isExpired(key) && snapshot);
};

exports.shouldThrottle = shouldThrottle;