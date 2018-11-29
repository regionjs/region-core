"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getThingsFromState = require("./util/getThingsFromState");

var _config = require("./util/config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isExpired = function isExpired(getState, key) {
  var fetchTime = (0, _getThingsFromState.getFetchTimes)(getState(), key);
  var now = new Date().getTime();
  return now - fetchTime > _config.expiredTime;
};

var groupLog = function groupLog(title, e) {
  if (process.env.NODE_ENV !== 'production') {
    console.groupCollapsed(title);
    console.debug(e);
    console.groupEnd();
  }
};

function formatResult(result, snapshot, key, format) {
  try {
    var formattedResult = format(result, snapshot);
    return formattedResult;
  } catch (e) {
    groupLog("Catch an error when format ".concat(key, ", return null instead."), e);
    return null;
  }
}

function _default(_x) {
  return _ref2.apply(this, arguments);
}

function _ref2() {
  _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var dispatch, getState, key, Promise, snapshot, forceUpdate, _ref$params, params, format, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch = _ref.dispatch, getState = _ref.getState, key = _ref.key, Promise = _ref.Promise, snapshot = _ref.snapshot, forceUpdate = _ref.forceUpdate, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, format = _ref.format;
            dispatch({
              type: _config.setLoading,
              payload: {
                key: key
              }
            });

            if (!(typeof Promise === 'function')) {
              _context.next = 10;
              break;
            }

            if (!(!forceUpdate && !isExpired(getState, key) && snapshot)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", snapshot);

          case 5:
            _context.next = 7;
            return Promise(params);

          case 7:
            result = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.next = 12;
            return Promise;

          case 12:
            result = _context.sent;

          case 13:
            if (typeof format === 'function') {
              result = formatResult(result, snapshot, key, format);
            }

            return _context.abrupt("return", result);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ref2.apply(this, arguments);
}