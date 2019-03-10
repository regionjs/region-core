"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatResult = require("../util/formatResult");

var _isAsync = require("../util/isAsync");

var _shouldThrottle = require("../util/shouldThrottle");

var _store = require("../global/store");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var toPromise =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var asyncFunction, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            asyncFunction = _ref.asyncFunction, params = _ref.params;

            if (!(typeof asyncFunction === 'function')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", asyncFunction(params));

          case 3:
            return _context.abrupt("return", asyncFunction);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function toPromise(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = function _default(Region) {
  var RegionPublic =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionPublic, _Region);

    function RegionPublic() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RegionPublic);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionPublic)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "set", function (key, result, option) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            setFp = _assertThisInitialize.setFp;

        return setFp(key, option)(result);
      });

      _defineProperty(_assertThisInitialized(_this), "setFp", function (key) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            format = _ref3.format;

        var _assertThisInitialize2 = _assertThisInitialized(_this),
            getResults = _assertThisInitialize2.private_getResults,
            private_actionTypes = _assertThisInitialize2.private_actionTypes;

        var SET = private_actionTypes.SET;

        var _getStore = (0, _store.getStore)(),
            dispatch = _getStore.dispatch;

        var snapshot = getResults(key); // TODO optimize setFp

        return function (result) {
          var formattedResult = (0, _formatResult.formatResult)({
            result: result,
            snapshot: snapshot,
            key: key,
            format: format
          });
          dispatch({
            type: SET,
            payload: {
              key: key,
              result: formattedResult
            }
          });
          return formattedResult;
        };
      });

      _defineProperty(_assertThisInitialized(_this), "reset", function () {
        var _assertThisInitialize3 = _assertThisInitialized(_this),
            private_actionTypes = _assertThisInitialize3.private_actionTypes;

        var RESET = private_actionTypes.RESET;

        var _getStore2 = (0, _store.getStore)(),
            dispatch = _getStore2.dispatch;

        dispatch({
          type: RESET
        });
      });

      _defineProperty(_assertThisInitialized(_this), "load",
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(key, asyncFunction) {
          var option,
              _assertThisInitialize4,
              set,
              _assertThisInitialize5,
              loadFp,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  option = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};

                  if ((0, _isAsync.isAsync)(asyncFunction)) {
                    _context2.next = 5;
                    break;
                  }

                  console.warn('set result directly');
                  _assertThisInitialize4 = _assertThisInitialized(_this), set = _assertThisInitialize4.set;
                  return _context2.abrupt("return", set(key, asyncFunction, option));

                case 5:
                  _assertThisInitialize5 = _assertThisInitialized(_this), loadFp = _assertThisInitialize5.loadFp;
                  return _context2.abrupt("return", loadFp(key, asyncFunction, option)(option.params));

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2, _x3) {
          return _ref4.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "loadFp", function (key, asyncFunction) {
        var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var forceUpdate = option.forceUpdate,
            defaultParams = option.params,
            format = option.format,
            id = option.id;

        var _assertThisInitialize6 = _assertThisInitialized(_this),
            getResults = _assertThisInitialize6.private_getResults,
            private_actionTypes = _assertThisInitialize6.private_actionTypes,
            expiredTime = _assertThisInitialize6.expiredTime,
            getFetchTimes = _assertThisInitialize6.private_getFetchTimes;

        var LOAD = private_actionTypes.LOAD,
            SET = private_actionTypes.SET;

        var _getStore3 = (0, _store.getStore)(),
            dispatch = _getStore3.dispatch;

        var snapshot = getResults(key); // TODO optimize loadFp

        return (
          /*#__PURE__*/
          function () {
            var _ref5 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3(params) {
              var result, formattedResult, _formattedResult;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // eslint-disable-next-line no-param-reassign, TODO remove it
                      params = Object.assign({}, defaultParams, params);

                      if (!(0, _shouldThrottle.shouldThrottle)({
                        asyncFunction: asyncFunction,
                        forceUpdate: forceUpdate,
                        key: key,
                        snapshot: snapshot,
                        id: id,
                        expiredTime: expiredTime,
                        getFetchTimes: getFetchTimes
                      })) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return", snapshot);

                    case 3:
                      dispatch({
                        type: LOAD,
                        payload: {
                          key: key
                        }
                      });
                      _context3.prev = 4;
                      _context3.next = 7;
                      return toPromise({
                        asyncFunction: asyncFunction,
                        params: params
                      });

                    case 7:
                      result = _context3.sent;
                      formattedResult = (0, _formatResult.formatResult)({
                        result: result,
                        snapshot: snapshot,
                        format: format,
                        id: id
                      });
                      dispatch({
                        type: SET,
                        payload: {
                          key: key,
                          result: formattedResult,
                          withLoadEnd: true
                        }
                      });
                      return _context3.abrupt("return", formattedResult);

                    case 13:
                      _context3.prev = 13;
                      _context3.t0 = _context3["catch"](4);
                      _formattedResult = (0, _formatResult.formatResult)({
                        error: _context3.t0,
                        snapshot: snapshot,
                        format: format,
                        id: id
                      });
                      dispatch({
                        type: SET,
                        payload: {
                          key: key,
                          result: _formattedResult,
                          error: _context3.t0,
                          withLoadEnd: true
                        }
                      });
                      return _context3.abrupt("return", _formattedResult);

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, null, [[4, 13]]);
            }));

            return function (_x4) {
              return _ref5.apply(this, arguments);
            };
          }()
        );
      });

      return _this;
    }

    return RegionPublic;
  }(Region);

  return RegionPublic;
};

exports.default = _default;