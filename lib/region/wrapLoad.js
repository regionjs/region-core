"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatResult = require("../util/formatResult");

var _isAsync = require("../util/isAsync");

var _shouldThrottle = require("../util/shouldThrottle");

var _store = require("../global/store");

var _logger = require("../util/logger");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var toPromise =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var Promise, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Promise = _ref.Promise, params = _ref.params;

            if (!(typeof Promise === 'function')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", Promise(params));

          case 3:
            return _context.abrupt("return", Promise);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function toPromise(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Region);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Region)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "load",
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(key, Promise) {
          var _ref4,
              forceUpdate,
              params,
              format,
              _assertThisInitialize,
              set,
              _assertThisInitialize2,
              getSnapshot,
              private_actionTypes,
              LOAD_START,
              LOAD_END,
              SET,
              ERROR,
              _getStore,
              dispatch,
              snapshot,
              result,
              formattedResult,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _ref4 = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {}, forceUpdate = _ref4.forceUpdate, params = _ref4.params, format = _ref4.format;

                  if ((0, _isAsync.isAsync)(Promise)) {
                    _context2.next = 5;
                    break;
                  }

                  console.warn('set result directly');
                  _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)), set = _assertThisInitialize.set;
                  return _context2.abrupt("return", set(key, Promise));

                case 5:
                  _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)), getSnapshot = _assertThisInitialize2.getResults, private_actionTypes = _assertThisInitialize2.private_actionTypes;
                  LOAD_START = private_actionTypes.LOAD_START, LOAD_END = private_actionTypes.LOAD_END, SET = private_actionTypes.SET, ERROR = private_actionTypes.ERROR;
                  _getStore = (0, _store.getStore)(), dispatch = _getStore.dispatch;
                  snapshot = getSnapshot(key);

                  if (!(0, _shouldThrottle.shouldThrottle)({
                    Promise: Promise,
                    forceUpdate: forceUpdate,
                    key: key,
                    snapshot: snapshot,
                    region: _assertThisInitialized(_assertThisInitialized(_this))
                  })) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt("return", snapshot);

                case 11:
                  dispatch({
                    type: LOAD_START,
                    payload: {
                      key: key
                    }
                  });
                  _context2.prev = 12;
                  _context2.next = 15;
                  return toPromise({
                    Promise: Promise,
                    params: params
                  });

                case 15:
                  result = _context2.sent;
                  formattedResult = (0, _formatResult.formatResult)({
                    result: result,
                    snapshot: snapshot,
                    key: key,
                    format: format
                  });
                  dispatch({
                    type: LOAD_END,
                    payload: {
                      key: key
                    }
                  });
                  dispatch({
                    type: SET,
                    payload: {
                      key: key,
                      result: formattedResult
                    }
                  });
                  return _context2.abrupt("return", formattedResult);

                case 22:
                  _context2.prev = 22;
                  _context2.t0 = _context2["catch"](12);
                  (0, _logger.groupError)("Catch an error when load ".concat(key, ", return null instead."), _context2.t0);
                  dispatch({
                    type: LOAD_END,
                    payload: {
                      key: key
                    }
                  });
                  dispatch({
                    type: ERROR,
                    payload: {
                      key: key,
                      error: _context2.t0
                    }
                  });
                  return _context2.abrupt("return", null);

                case 28:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[12, 22]]);
        }));

        return function (_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());

      return _this;
    }

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;