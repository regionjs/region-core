'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignValue = assignValue;
exports.assignValueDeep = assignValueDeep;
exports.setValueDeep = setValueDeep;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */

function assignValue(state, key, value) {
  var obj = _defineProperty({}, key, value);
  return Object.assign({}, state, obj);
}

/**
 * assignValueDeep
 * @param {Object} state
 * @param {Array|string} pathOrigin
 * @param {*} value - value assign to path
 * @returns {Object} - state
 */
function assignValueDeep() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pathOrigin = arguments[1];
  var value = arguments[2];

  if (!pathOrigin) {
    console.warn('empty path invalid');
    return Object.assign({}, state, value);
  }
  if (!Array.isArray(pathOrigin)) {
    return assignValue(state, pathOrigin, value);
  }
  if (pathOrigin.length === 0) {
    console.warn('empty path invalid');
    return Object.assign({}, state, value);
  }
  if (pathOrigin.length === 1) {
    return assignValue(state, pathOrigin[0], value);
  }
  var path = pathOrigin.slice();
  var key = path.shift();
  var formatObj = _defineProperty({}, key, assignValueDeep(state[key], path, value));
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
  var path = arguments[1];
  var value = arguments[2];

  if (!path) {
    console.warn('empty path invalid');
    Object.assign(state, value);
    return null;
  }
  if (!Array.isArray(path)) {
    state[path] = value;
    return null;
  }
  if (path.length === 0) {
    console.warn('empty path invalid');
    Object.assign(state, value);
    return null;
  }
  if (path.length === 1) {
    state[path] = value;
    return null;
  }

  var obj = state;
  var i = void 0;
  for (i = 0; i < path.length - 1; i++) {
    if (obj[path[i]] === undefined) {
      obj[path[i]] = {};
    }
    obj = obj[path[i]];
  }
  obj[path[i]] = value;
  return null;
}