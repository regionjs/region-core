'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.reducer = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.mapResultToProps = exports.load = undefined;

require('babel-polyfill');

var _load = require('./load');

var _getThingsFromState = require('./util/getThingsFromState');

var _reducer = require('./reducer');

var _config = require('./util/config');

exports.load = _load.load;
exports.mapResultToProps = _getThingsFromState.mapResultToProps;
exports.getLoading = _getThingsFromState.getLoading;
exports.getResults = _getThingsFromState.getResults;
exports.getFetchTimes = _getThingsFromState.getFetchTimes;
exports.reducer = _reducer.reducer;
exports.setConfig = _config.setConfig;