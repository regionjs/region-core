'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapResultToProps = exports.getFetchTimes = exports.getResults = exports.getLoading = undefined;

var _config = require('./config');

var getReducerState = function getReducerState() {
  // TODO complex path
  var state = _config.store.getState();
  if (_config.reducerPath === null) {
    return state || {};
  }
  return state[_config.reducerPath] || {};
};

var getLoading = exports.getLoading = function getLoading(path) {
  var _getReducerState = getReducerState(),
      loadings = _getReducerState.loadings;

  if (!loadings) {
    return true;
  }
  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (loadings[path[i]] || loadings[path[i]] === undefined) {
        // include undefined
        return true;
      }
    }
    return false;
  }
  return loadings[path];
};

var getResults = exports.getResults = function getResults(path) {
  var _getReducerState2 = getReducerState(),
      _getReducerState2$res = _getReducerState2.results,
      results = _getReducerState2$res === undefined ? {} : _getReducerState2$res;

  if (Array.isArray(path)) {
    var ans = [];
    for (var i = 0; i < path.length; i++) {
      var key = path[i];
      ans.push(results[key]);
    }
    return ans;
  }
  return results[path];
};

var getFetchTimes = exports.getFetchTimes = function getFetchTimes(path) {
  var _getReducerState3 = getReducerState(),
      _getReducerState3$fet = _getReducerState3.fetchTimes,
      fetchTimes = _getReducerState3$fet === undefined ? {} : _getReducerState3$fet;

  if (Array.isArray(path)) {
    var ans = [];
    for (var i = 0; i < path.length; i++) {
      var key = path[i];
      ans.push(fetchTimes[key]);
    }
    return ans;
  }
  return fetchTimes[path];
};

var mapResultToProps = exports.mapResultToProps = function mapResultToProps(path) {
  return function () {
    var loading = getLoading(path);
    var results = getResults(path);
    var props = { loading: loading };
    if (Array.isArray(path)) {
      path.forEach(function (key, index) {
        props[key] = results[index];
      });
      return props;
    }
    props[path] = results;
    return props;
  };
};