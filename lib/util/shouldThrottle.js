"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isExpired = function (_a) {
    var key = _a.key, expiredTime = _a.expiredTime, getFetchTimes = _a.getFetchTimes;
    var fetchTime = getFetchTimes(key);
    var now = new Date().getTime();
    return now - fetchTime > expiredTime;
};
exports.shouldThrottle = function (_a) {
    var asyncFunction = _a.asyncFunction, forceUpdate = _a.forceUpdate, key = _a.key, snapshot = _a.snapshot, expiredTime = _a.expiredTime, getFetchTimes = _a.getFetchTimes;
    return Boolean(expiredTime > 0 && typeof asyncFunction === 'function' && !forceUpdate && snapshot && !isExpired({ key: key, expiredTime: expiredTime, getFetchTimes: getFetchTimes }));
};
