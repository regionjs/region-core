'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.connect = exports.reducer = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.mapResultToProps = exports.load = undefined;

require('babel-polyfill');

var _load = require('./load');

var _getThingsFromState = require('./util/getThingsFromState');

var _reducer = require('./reducer');

var _connect = require('./connect');

var _config = require('./util/config');

var getLoading = function getLoading(state, path) {
  if (typeof state === 'string' || Array.isArray(state)) {
    return (0, _getThingsFromState.getLoading)(state);
  }
  console.warn('just migrate getLoading(state, path) => getLoading(path)');
  return (0, _getThingsFromState.getLoading)(path);
};

var getResults = function getResults(state, path) {
  if (typeof state === 'string' || Array.isArray(state)) {
    return (0, _getThingsFromState.getResults)(state);
  }
  console.warn('just migrate getResults(state, path) => getResults(path)');
  return (0, _getThingsFromState.getResults)(path);
};

var getFetchTimes = function getFetchTimes(state, path) {
  if (typeof state === 'string' || Array.isArray(state)) {
    return (0, _getThingsFromState.getFetchTimes)(state);
  }
  console.warn('just migrate getFetchTimes(state, path) => getFetchTimes(path)');
  return (0, _getThingsFromState.getFetchTimes)(path);
};

exports.load = _load.load;
exports.mapResultToProps = _getThingsFromState.mapResultToProps;
exports.getLoading = getLoading;
exports.getResults = getResults;
exports.getFetchTimes = getFetchTimes;
exports.reducer = _reducer.reducer;
exports.connect = _connect.connect;
exports.setConfig = _config.setConfig;