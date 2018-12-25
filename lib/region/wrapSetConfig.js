"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = require("../global/store");

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
      _this.setConfig = _this.setConfig.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Region, [{
      key: "setConfig",
      value: function setConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var store = config.store,
            reducerPath = config.reducerPath,
            expiredTime = config.expiredTime,
            enableLog = config.enableLog,
            strictLoading = config.strictLoading,
            silentConnect = config.silentConnect;

        if (store !== undefined) {
          (0, _store.setStore)(store);
        }

        if (reducerPath !== undefined) {
          this.reducerPath = reducerPath;
        }

        if (expiredTime !== undefined) {
          this.expiredTime = expiredTime;
        }

        if (enableLog !== undefined) {
          this.enableLog = enableLog;
        }

        if (strictLoading !== undefined) {
          this.strictLoading = strictLoading;
        }

        if (silentConnect !== undefined) {
          this.silentConnect = silentConnect;
        }
      }
    }]);

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;