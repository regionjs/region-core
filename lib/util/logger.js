'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
};

var formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
};

var getFormat = function getFormat(prefix, str) {
  var formatString = ' %c' + prefix + ' %c' + str + ' %c@ ' + formatTime(new Date());
  return [formatString, 'color: gray; font-weight: lighter;', 'font-weight: bold', 'color: gray; font-weight: lighter;'];
};

var debug = exports.debug = function debug(prefix, str) {
  var _console;

  return (_console = console).debug.apply(_console, _toConsumableArray(getFormat(prefix, str)));
};
var group = exports.group = function group(prefix, str, result, nextState) {
  var _console2;

  (_console2 = console).groupCollapsed.apply(_console2, _toConsumableArray(getFormat(prefix, str)));
  console.debug('%cresult    ', 'color: #03A9F4; font-weight: bold', result);
  console.debug('%cnext state', 'color: #4CAF50; font-weight: bold', nextState);
  console.groupEnd();
};