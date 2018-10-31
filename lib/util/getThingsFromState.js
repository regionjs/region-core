"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapResultToProps = exports.getFetchTimes = exports.getResults = exports.getLoading = void 0;

var _config = require("./config");

var getReducerState = function getReducerState() {
  // TODO complex path
  var state = _config.store.getState();

  if (_config.reducerPath === null) {
    return state || {};
  }

  return state[_config.reducerPath] || {};
};

var formatLoading = function formatLoading(loading) {
  if (loading) {
    return true;
  }

  if (loading === undefined) {
    if (_config.strictLoading) {
      // treat undefined as true or as undefined
      return true;
    }

    return undefined;
  }

  return false;
};

var getLoading = function getLoading(path) {
  var _getReducerState = getReducerState(),
      loadings = _getReducerState.loadings;

  if (!loadings) {
    return true;
  }

  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (formatLoading(loadings[path[i]])) {
        return true;
      }
    }

    return false;
  }

  return formatLoading(loadings[path]);
};

exports.getLoading = getLoading;

var getResults = function getResults(path) {
  var _getReducerState2 = getReducerState(),
      _getReducerState2$res = _getReducerState2.results,
      results = _getReducerState2$res === void 0 ? {} : _getReducerState2$res;

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

exports.getResults = getResults;

var getFetchTimes = function getFetchTimes(path) {
  var _getReducerState3 = getReducerState(),
      _getReducerState3$fet = _getReducerState3.fetchTimes,
      fetchTimes = _getReducerState3$fet === void 0 ? {} : _getReducerState3$fet;

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

exports.getFetchTimes = getFetchTimes;

var mapResultToProps = function mapResultToProps(path) {
  return function () {
    var loading = getLoading(path);
    var results = getResults(path);
    var props = {
      loading: loading
    };

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

exports.mapResultToProps = mapResultToProps;