"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getThingsFromState = require("./util/getThingsFromState");

var _constant = require("./util/constant");

var _config = require("./util/config");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isExpired = function isExpired(getState, key) {
  var expiredTime = _config.region.expiredTime;
  var fetchTime = (0, _getThingsFromState.getFetchTimes)(getState(), key);
  var now = new Date().getTime();
  return now - fetchTime > expiredTime;
};

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var dispatch, getState, key, Promise, snapshot, forceUpdate, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch = _ref.dispatch, getState = _ref.getState, key = _ref.key, Promise = _ref.Promise, snapshot = _ref.snapshot, forceUpdate = _ref.forceUpdate, params = _ref.params;
            dispatch({
              type: _constant.setLoading,
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
            return _context.abrupt("return", result);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;