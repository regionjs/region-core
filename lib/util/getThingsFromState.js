'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapResultToProps = exports.getFetchTimes = exports.getResults = exports.getLoading = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducerPath = _config2.default.reducerPath;


var getReducerState = function getReducerState(state) {
  // TODO complex path
  if (reducerPath === null) {
    return state || {};
  }
  return state[reducerPath] || {};
};

var getLoading = exports.getLoading = function getLoading(state, path) {
  var _getReducerState = getReducerState(state),
      loadings = _getReducerState.loadings;

  if (!loadings) {
    return true;
  }
  if (Array.isArray(path)) {
    for (var i = 0; i < path.length; i++) {
      if (loadings[path[i]]) {
        // exclude undefined
        return true;
      }
    }
    return false;
  }
  return loadings[path];
};

var getResults = exports.getResults = function getResults(state, path) {
  var _getReducerState2 = getReducerState(state),
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

var getFetchTimes = exports.getFetchTimes = function getFetchTimes(state, path) {
  var _getReducerState3 = getReducerState(state),
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
  return function (state) {
    var loading = getLoading(state, path);
    var results = getResults(state, path);
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