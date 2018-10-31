"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getThingsFromState = require("./util/getThingsFromState");

var _config = require("./util/config");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function promiseCall(_x, _x2, _x3, _x4, _x5) {
  return _promiseCall.apply(this, arguments);
}

function _promiseCall() {
  _promiseCall = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(dispatch, key, Promise, props, snapshot) {
    var result, _props$params, params, format;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _props$params = props.params, params = _props$params === void 0 ? {} : _props$params, format = props.format;
            dispatch({
              type: _config.setLoading,
              payload: {
                key: key
              }
            });
            _context.next = 4;
            return Promise(params);

          case 4:
            result = _context.sent;

            if (typeof format === 'function') {
              result = formatResult(result, snapshot, key, format);
            }

            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _promiseCall.apply(this, arguments);
}

function _default(_x6, _x7, _x8, _x9, _x10, _x11) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(dispatch, getState, key, Promise, snapshot, props) {
    var forceUpdate, _result, result;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            forceUpdate = props.forceUpdate;

            if (!(!forceUpdate && !isExpired(getState, key) && snapshot)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", snapshot);

          case 3:
            if (!(_typeof(Promise) === 'object' && typeof Promise.then === 'function')) {
              _context2.next = 9;
              break;
            }

            console.warn('redux-loadings: You are passing promise, it may cause performance problem and bugs. Pass a function returns a promise instead');
            _context2.next = 7;
            return Promise;

          case 7:
            _result = _context2.sent;
            return _context2.abrupt("return", _result);

          case 9:
            if (!(typeof Promise !== 'function')) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", Promise);

          case 11:
            _context2.next = 13;
            return promiseCall(dispatch, key, Promise, props, snapshot);

          case 13:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _ref.apply(this, arguments);
}