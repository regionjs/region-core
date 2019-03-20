"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repeat = function (str, times) { return (new Array(times + 1)).join(str); }; // tslint:disable-line prefer-array-literal
var pad = function (num, maxLength) { return repeat('0', maxLength - num.toString().length) + num; };
var formatTime = function (time) { return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3); };
var getFormat = function (prefix, str) {
    var formatString = " %c" + prefix + " %c" + str + " %c@ " + formatTime(new Date());
    return [formatString, 'color: gray; font-weight: lighter;', 'font-weight: bold', 'color: gray; font-weight: lighter;'];
};
exports.debug = function (prefix, str) { return console.debug.apply(console, getFormat(prefix, str)); };
exports.group = function (_a) {
    var actionType = _a.actionType, key = _a.key, result = _a.result, error = _a.error, nextState = _a.nextState;
    console.groupCollapsed.apply(console, getFormat(actionType, key));
    console.debug('%cresult    ', 'color: #03A9F4; font-weight: bold', result);
    console.debug('%cerror     ', 'color: #f5222d; font-weight: bold', error);
    console.debug('%cnext state', 'color: #4CAF50; font-weight: bold', nextState);
    console.groupEnd();
};
