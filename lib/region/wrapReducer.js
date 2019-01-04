"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = require("../util/logger");

var _reducerPrototype = require("../util/reducerPrototype");

var _store = require("../global/store");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reducer", function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            enableLog = _assertThisInitialize.enableLog,
            SET_LOADING = _assertThisInitialize.SET_LOADING,
            SET_RESULT = _assertThisInitialize.SET_RESULT;

        var enableLogInDev = process.env.NODE_ENV !== 'production' && enableLog;

        if (action.type === SET_LOADING) {
          var key = action.payload.key;

          if (enableLogInDev) {
            (0, _logger.debug)(SET_LOADING, key);
          }

          return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
        }

        if (action.type === SET_RESULT) {
          var _action$payload = action.payload,
              _key2 = _action$payload.key,
              result = _action$payload.result;
          (0, _reducerPrototype.setValueDeep)(state, ['results', _key2], result);
          (0, _reducerPrototype.setValueDeep)(state, ['fetchTimes', _key2], new Date().getTime());
          var nextState = (0, _reducerPrototype.assignValueDeep)(state, ['loadings', _key2], false);

          if (enableLogInDev) {
            (0, _logger.group)(SET_RESULT, _key2, result, nextState);
          }

          return nextState;
        }

        return state;
      });

      var reducerObject = (0, _store.getReducerObject)();

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          reducerPath = _assertThisInitialize2.reducerPath,
          reducer = _assertThisInitialize2.reducer;

      (0, _store.setReducerObject)(_objectSpread({}, reducerObject, _defineProperty({}, reducerPath, reducer)));
      (0, _store.replace)();
      return _this;
    }

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;