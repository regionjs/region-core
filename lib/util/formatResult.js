"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatResult = void 0;

var formatResult = function formatResult(_ref) {
  var result = _ref.result,
      snapshot = _ref.snapshot,
      format = _ref.format;

  if (typeof format !== 'function') {
    return result;
  }

  var formattedResult = format(result, snapshot);
  return formattedResult;
};

exports.formatResult = formatResult;