"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.group = exports.debug = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
};

var formatTime = function formatTime(time) {
  return "".concat(pad(time.getHours(), 2), ":").concat(pad(time.getMinutes(), 2), ":").concat(pad(time.getSeconds(), 2), ".").concat(pad(time.getMilliseconds(), 3));
};

var getFormat = function getFormat(prefix, str) {
  var formatString = " %c".concat(prefix, " %c").concat(str, " %c@ ").concat(formatTime(new Date()));
  return [formatString, 'color: gray; font-weight: lighter;', 'font-weight: bold', 'color: gray; font-weight: lighter;'];
};

var debug = function debug(prefix, str) {
  var _console;

  return (_console = console).debug.apply(_console, _toConsumableArray(getFormat(prefix, str)));
};

exports.debug = debug;

var group = function group(prefix, str, result, nextState) {
  var _console2;

  (_console2 = console).groupCollapsed.apply(_console2, _toConsumableArray(getFormat(prefix, str)));

  console.debug('%cresult    ', 'color: #03A9F4; font-weight: bold', result);
  console.debug('%cnext state', 'color: #4CAF50; font-weight: bold', nextState);
  console.groupEnd();
};

exports.group = group;