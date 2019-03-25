"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatTime = function (time) {
    var hour = time.getHours().toString().padStart(2, '0');
    var minute = time.getMinutes().toString().padStart(2, '0');
    var second = time.getSeconds().toString().padStart(2, '0');
    var millisecond = time.getMilliseconds().toString().padStart(3, '0');
    return hour + ":" + minute + ":" + second + "." + millisecond;
};
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
