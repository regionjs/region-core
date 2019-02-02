"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatResult = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatResult = function formatResult(_ref) {
  var result = _ref.result,
      snapshot = _ref.snapshot,
      format = _ref.format,
      error = _ref.error,
      id = _ref.id;
  var formatted = typeof format === 'function' ? format(result, snapshot, error) : result;

  if (id !== undefined) {
    return Object.assign(_defineProperty({}, id, formatted), snapshot);
  }

  return formatted;
};

exports.formatResult = formatResult;