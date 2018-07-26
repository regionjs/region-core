'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.getReducer = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.mapResultToProps = exports.load = exports.asyncLoad = undefined;

require('babel-polyfill');

var _load = require('./load');

var _getThingsFromState = require('./util/getThingsFromState');

var _reducer = require('./reducer');

var _config = require('./config');

exports.asyncLoad = _load.asyncLoad;
exports.load = _load.load;
exports.mapResultToProps = _getThingsFromState.mapResultToProps;
exports.getLoading = _getThingsFromState.getLoading;
exports.getResults = _getThingsFromState.getResults;
exports.getFetchTimes = _getThingsFromState.getFetchTimes;
exports.getReducer = _reducer.getReducer;
exports.setConfig = _config.setConfig;