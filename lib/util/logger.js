'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
};

var formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ':' + pad(time.getMinutes(), 2) + ':' + pad(time.getSeconds(), 2) + '.' + pad(time.getMilliseconds(), 3);
};

var factory = function factory(logger) {
  return function (prefix, str) {
    var formatString = ' %c' + prefix + ' %c' + str + ' %c@ ' + formatTime(new Date());
    logger(formatString, 'color: gray; font-weight: lighter;', 'font-weight: bold', 'color: gray; font-weight: lighter;');
  };
};

var debug = exports.debug = factory(console.debug);
var group = exports.group = function group(prefix, str, result, nextState) {
  factory(console.groupCollapsed)(prefix, str);
  console.debug('%cresult    ', 'color: #03A9F4; font-weight: bold', result);
  console.debug('%cnext state', 'color: #4CAF50; font-weight: bold', nextState);
  console.groupEnd();
};