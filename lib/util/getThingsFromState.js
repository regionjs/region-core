"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFetchTimes = exports.getResults = exports.getLoading = void 0;

var _config = require("./config");

var getLoading = _config.region.getLoading,
    getResults = _config.region.getResults,
    getFetchTimes = _config.region.getFetchTimes;
exports.getFetchTimes = getFetchTimes;
exports.getResults = getResults;
exports.getLoading = getLoading;