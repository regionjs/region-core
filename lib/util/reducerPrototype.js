"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignValueDeep = assignValueDeep;
exports.setValueDeep = setValueDeep;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */
function assignValue(state, key, value) {
  var obj = _defineProperty({}, key, value);

  return Object.assign({}, state, obj);
}

var isPathInvalid = function isPathInvalid(path) {
  if (!path) {
    return true;
  }

  return Array.isArray(path) && path.length === 0;
};
/**
 * assignValueDeep
 * @param {Object} state
 * @param {Array|string} path
 * @param {*} value - value assign to path
 * @returns {Object} - state
 */


function assignValueDeep() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;

  if (isPathInvalid(path)) {
    console.warn('empty path invalid');
    return Object.assign({}, state, value);
  }

  if (!Array.isArray(path)) {
    return assignValue(state, path, value);
  }

  if (path.length === 1) {
    return assignValue(state, path[0], value);
  }

  var pathCopied = path.slice();
  var key = pathCopied.shift();

  var formatObj = _defineProperty({}, key, assignValueDeep(state[key], pathCopied, value));

  return Object.assign({}, state, formatObj);
}
/**
 * setValueDeep
 * @param {Object} state
 * @param {Array|string} path
 * @param {*} value - value assign to path
 * @returns null
 */


function setValueDeep() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;

  if (isPathInvalid(path)) {
    console.warn('empty path invalid');
    Object.assign(state, value);
    return null;
  }

  if (!Array.isArray(path)) {
    state[path] = value;
    return null;
  }

  if (path.length === 1) {
    state[path] = value;
    return null;
  }

  var obj = state;
  var i;

  for (i = 0; i < path.length - 1; i++) {
    if (obj[path[i]] === undefined) {
      obj[path[i]] = {};
    }

    obj = obj[path[i]];
  }

  obj[path[i]] = value;
  return null;
}