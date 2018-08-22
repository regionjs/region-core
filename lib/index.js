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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var asyncLoad = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, key, Promise, props) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.warn('asyncLoad is deprecated, use load instead');
            _context.next = 3;
            return (0, _load.asyncLoad)(dispatch, getState, key, Promise, props);

          case 3:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function asyncLoad(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var getReducer = function getReducer(config) {
  console.warn('getReducer is deprecated, use reducer & setConfig instead');
  return (0, _reducer.getReducer)(config);
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