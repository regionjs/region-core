'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.asyncLoad = undefined;

/**
 * @param props.params Promise may need
 * @param props.format A pure function format result to other data structure
 * @param props.forceUpdate 'always' | 'need' | 'never'
 */
var asyncLoad = exports.asyncLoad = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, key, Promise) {
    var props = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    var snapshot, _props$params, params, _props$forceUpdate, forceUpdate, format, formatSplit, willSetResult, didSetResult, result;

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
            snapshot = (0, _getThingsFromState.getResults)(getState(), key);
            _props$params = props.params, params = _props$params === undefined ? {} : _props$params, _props$forceUpdate = props.forceUpdate, forceUpdate = _props$forceUpdate === undefined ? 'need' : _props$forceUpdate, format = props.format, formatSplit = props.formatSplit, willSetResult = props.willSetResult, didSetResult = props.didSetResult;
            result = void 0;

            if (!(forceUpdate === 'never' && snapshot)) {
              _context.next = 9;
              break;
            }

            result = snapshot;
            _context.next = 24;
            break;

          case 9:
            if (!(forceUpdate === 'need' && !isExpired(getState, key) && snapshot)) {
              _context.next = 13;
              break;
            }

            result = snapshot;
            _context.next = 24;
            break;

          case 13:
            if (!(typeof Promise !== 'function')) {
              _context.next = 18;
              break;
            }

            // TODO fire warning if Promise is a promise, it should be a Promise
            console.warn('redux-loadings: function which returns a promise is required. Plain object and non-func Promise works, but it may cause performance problem and bugs');
            result = Promise;
            _context.next = 24;
            break;

          case 18:
            dispatch({ type: _config.setLoading, payload: { key: key } });
            _context.next = 21;
            return Promise(params);

          case 21:
            result = _context.sent;

            if (typeof format === 'function') {
              result = formatResult(result, format, snapshot, key);
            }
            if (Array.isArray(result) && formatSplit) {
              result.forEach(function (item, index) {
                var itemKey = item[formatSplit] || item.id || index;
                dispatch({ type: _config.setResult, payload: { key: key + '/' + itemKey, result: item } });
              });
            }

          case 24:

            if (typeof willSetResult === 'function') {
              willSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
            }

            dispatch({ type: _config.setResult, payload: { key: key, result: result } });

            if (typeof didSetResult === 'function') {
              didSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
            }
            return _context.abrupt('return', result);

          case 28:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncLoad(_x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var _getThingsFromState = require('./util/getThingsFromState');

var _config = require('./util/config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isExpired = function isExpired(getState, key) {
  var fetchTime = (0, _getThingsFromState.getFetchTimes)(getState(), key);
  var now = new Date().getTime();
  return now - fetchTime > _config.expiredTime;
};

function formatResult(result, format, snapshot, key) {
  try {
    var formattedResult = format(result, snapshot);
    return formattedResult;
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.groupCollapsed('Catch an error when format ' + key + ', return null instead.');
      console.debug(e);
      console.groupEnd();
    }
    return null;
  }
}var load = exports.load = function load(key, Promise, props) {
  return function (dispatch, getState) {
    asyncLoad(dispatch, getState, key, Promise, props);
  };
};