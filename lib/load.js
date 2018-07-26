'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.asyncLoad = exports.setExpiredTime = undefined;

/**
 * @param config.params Promise may need
 * @param config.format A pure function format result to other data structure
 * @param config.forceUpdate 'always' | 'need' | 'never'
 */
var asyncLoad = exports.asyncLoad = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, key, Promise) {
    var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    var _config$params, params, _config$forceUpdate, forceUpdate, format, willSetResult, didSetResult, snapshot, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof dispatch !== 'function' || typeof getState !== 'function')) {
              _context.next = 2;
              break;
            }

            throw Error('dispatch and getState is required when you use asyncLoad()');

          case 2:
            _config$params = config.params, params = _config$params === undefined ? {} : _config$params, _config$forceUpdate = config.forceUpdate, forceUpdate = _config$forceUpdate === undefined ? 'need' : _config$forceUpdate, format = config.format, willSetResult = config.willSetResult, didSetResult = config.didSetResult;
            snapshot = (0, _getThingsFromState.getResults)(getState(), key);
            result = void 0;

            if (!(forceUpdate === 'never' && snapshot)) {
              _context.next = 9;
              break;
            }

            // eslint-disable-line no-mixed-operators
            result = snapshot;
            _context.next = 22;
            break;

          case 9:
            if (!(forceUpdate === 'need' && !isExpired(getState, key) && snapshot)) {
              _context.next = 13;
              break;
            }

            result = snapshot;
            _context.next = 22;
            break;

          case 13:
            if (!(typeof Promise !== 'function')) {
              _context.next = 17;
              break;
            }

            // TODO fire warning
            result = Promise;
            _context.next = 22;
            break;

          case 17:
            dispatch(setLoading({ key: key }));
            _context.next = 20;
            return Promise(params);

          case 20:
            result = _context.sent;

            if (typeof format === 'function') {
              result = format(result, snapshot);
            }

          case 22:

            if (typeof willSetResult === 'function') {
              willSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
            }

            dispatch(setResult({ key: key, result: result }));

            if (typeof didSetResult === 'function') {
              didSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
            }
            return _context.abrupt('return', result);

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncLoad(_x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

var _reduxActions = require('redux-actions');

var _getThingsFromState = require('./util/getThingsFromState');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var expiredTime = 5 * 60 * 1000;

var setExpiredTime = exports.setExpiredTime = function setExpiredTime() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5 * 60 * 1000;

  expiredTime = value;
};

// FIXME

var _createActions = (0, _reduxActions.createActions)('SET_LOADING', 'SET_RESULT'),
    setLoading = _createActions.setLoading,
    setResult = _createActions.setResult;

var isExpired = function isExpired(getState, key) {
  var fetchTime = (0, _getThingsFromState.getFetchTimes)(getState(), key);
  var now = new Date().getTime();
  return now - fetchTime > expiredTime;
};var load = exports.load = function load(key, Promise, config) {
  return function (dispatch, getState) {
    asyncLoad(dispatch, getState, key, Promise, config);
  };
};