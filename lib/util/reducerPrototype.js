"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignValueDeep = assignValueDeep;
exports.setValueDeep = setValueDeep;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function assignValue() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var format = arguments.length > 2 ? arguments[2] : undefined;
  var value = format(state[key]);
  return Object.assign({}, state, _defineProperty({}, key, value));
} // NOTE 只支持 path.length === 2 和 format


function assignValueDeep() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var format = arguments.length > 2 ? arguments[2] : undefined;
  var pathCopied = path.slice();
  var key = pathCopied.shift();

  var formatObj = _defineProperty({}, key, assignValue(state[key], pathCopied[0], format));

  return Object.assign({}, state, formatObj);
} // NOTE 只支持 path.length === 2 和 value


function setValueDeep(state, path, value) {
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