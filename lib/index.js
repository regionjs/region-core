'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = exports.getReducer = exports.reducer = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.mapResultToProps = exports.load = exports.asyncLoad = undefined;

require('babel-polyfill');

var _load = require('./load');

var _getThingsFromState = require('./util/getThingsFromState');

var _reducer = require('./reducer');

var _config = require('./util/config');

var asyncLoad = function asyncLoad(dispatch, getState, key, Promise, props) {
  console.warn('asyncLoad is deprecated, use load instead');
  (0, _load.asyncLoad)(dispatch, getState, key, Promise, props);
};

var getReducer = function getReducer(config) {
  console.warn('getReducer is deprecated, use reducer instead');
  (0, _reducer.getReducer)(config);
};

exports.asyncLoad = asyncLoad;
exports.load = _load.load;
exports.mapResultToProps = _getThingsFromState.mapResultToProps;
exports.getLoading = _getThingsFromState.getLoading;
exports.getResults = _getThingsFromState.getResults;
exports.getFetchTimes = _getThingsFromState.getFetchTimes;
exports.reducer = _reducer.reducer;
exports.getReducer = getReducer;
exports.setConfig = _config.setConfig;