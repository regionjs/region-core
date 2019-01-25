"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldThrottle = void 0;

var isExpired = function isExpired(_ref) {
  var key = _ref.key,
      expiredTime = _ref.expiredTime,
      getFetchTimes = _ref.getFetchTimes;
  var fetchTime = getFetchTimes(key);
  var now = new Date().getTime();
  return now - fetchTime > expiredTime;
};

var shouldThrottle = function shouldThrottle(_ref2) {
  var asyncFunction = _ref2.asyncFunction,
      forceUpdate = _ref2.forceUpdate,
      key = _ref2.key,
      snapshot = _ref2.snapshot,
      expiredTime = _ref2.expiredTime,
      getFetchTimes = _ref2.getFetchTimes;
  return Boolean(typeof asyncFunction === 'function' && !forceUpdate && !isExpired({
    key: key,
    expiredTime: expiredTime,
    getFetchTimes: getFetchTimes
  }) && snapshot);
};

exports.shouldThrottle = shouldThrottle;