"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = void 0;

var _region = require("./region");

var _constant = require("./constant");

var _formatResult = require("./formatResult");

/**
 * @param format A function format result to other data structure
 */
var set = function set(key, result) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      format = _ref.format;

  var _getStore = (0, _formatResult.getStore)(),
      dispatch = _getStore.dispatch;

  var snapshot = (0, _region.getResults)(key);
  var formattedResult = (0, _formatResult.formatResult)({
    result: result,
    snapshot: snapshot,
    key: key,
    format: format
  });
  dispatch({
    type: _constant.setResult,
    payload: {
      key: key,
      result: formattedResult
    }
  });
  return formattedResult;
};

exports.set = set;