"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = require("../util/logger");

var _constant = require("../util/constant");

var _reducerPrototype = require("../util/reducerPrototype");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region() {
      var _this;

      _classCallCheck(this, Region);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Region).call(this));
      _this.reducer = _this.reducer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Region, [{
      key: "reducer",
      value: function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;
        var enableLog = this.enableLog;
        var enableLogInDev = process.env.NODE_ENV !== 'production' && enableLog;

        if (action.type === _constant.setLoading) {
          var key = action.payload.key;

          if (enableLogInDev) {
            (0, _logger.debug)(_constant.setLoading, key);
          }

          return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], true);
        }

        if (action.type === _constant.setResult) {
          var _action$payload = action.payload,
              _key = _action$payload.key,
              result = _action$payload.result;
          (0, _reducerPrototype.setValueDeep)(state, ['results', _key], result);
          (0, _reducerPrototype.setValueDeep)(state, ['fetchTimes', _key], new Date().getTime());
          var nextState = (0, _reducerPrototype.assignValueDeep)(state, ['loadings', _key], false);

          if (enableLogInDev) {
            (0, _logger.group)(_constant.setResult, _key, result, nextState);
          }

          return nextState;
        }

        return state;
      }
    }]);

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;