"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatResult = require("../util/formatResult");

var _constant = require("../util/constant");

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
      _this.set = _this.set.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }
    /**
     * @param format A function format result to other data structure
     */


    _createClass(Region, [{
      key: "set",
      value: function set(key, result) {
        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            format = _ref.format;

        var getSnapshot = this.getResults;

        var _getStore = (0, _store.getStore)(),
            dispatch = _getStore.dispatch;

        var snapshot = getSnapshot(key);
        var formattedResult = (0, _formatResult.formatResult)({
          result: result,
          snapshot: snapshot,
          key: key,
          format: format
        });
        dispatch({
          type: _constant.setResult,
          payload: {
            key: key,
            result: formattedResult
          }
        });
        return formattedResult;
      }
    }]);

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;