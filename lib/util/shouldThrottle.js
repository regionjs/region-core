"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldThrottle = void 0;

var isExpired = function isExpired(_ref) {
  var key = _ref.key,
      region = _ref.region;

  if (!region) {
    return true;
  } // TODO lift up


  var expiredTime = region.expiredTime,
      getFetchTimes = region.getFetchTimes;
  var fetchTime = getFetchTimes(key);
  var now = new Date().getTime();
  return now - fetchTime > expiredTime;
};

var shouldThrottle = function shouldThrottle(_ref2) {
  var Promise = _ref2.Promise,
      forceUpdate = _ref2.forceUpdate,
      key = _ref2.key,
      snapshot = _ref2.snapshot,
      region = _ref2.region;
  return Boolean(typeof Promise === 'function' && !forceUpdate && !isExpired({
    key: key,
    region: region
  }) && snapshot);
};

exports.shouldThrottle = shouldThrottle;