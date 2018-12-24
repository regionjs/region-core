"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatResult = exports.getStore = void 0;

var _region = require("./region");

var _logger = require("./logger");

var getStore = function getStore() {
  var store = _region.region.store;

  if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
    throw Error('setConfig({ store }) must be called');
  }

  return store;
};

exports.getStore = getStore;

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