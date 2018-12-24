"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatResult = void 0;

var _logger = require("./logger");

// import { region } from './region';
// export const { getStore } = region;
var formatResult = function formatResult(_ref) {
  var result = _ref.result,
      snapshot = _ref.snapshot,
      key = _ref.key,
      format = _ref.format;

  if (typeof format !== 'function') {
    return result;
  }

  try {
    var formattedResult = format(result, snapshot);
    return formattedResult;
  } catch (e) {
    (0, _logger.groupError)("Catch an error when format ".concat(key, ", return null instead."), e);
    return null;
  }
};

exports.formatResult = formatResult;