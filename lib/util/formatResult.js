"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatResult = void 0;

var formatResult = function formatResult(_ref) {
  var result = _ref.result,
      snapshot = _ref.snapshot,
      format = _ref.format,
      error = _ref.error;

  if (typeof format !== 'function') {
    return result;
  }

  return format(result, snapshot, error);
};

exports.formatResult = formatResult;