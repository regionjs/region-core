"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var formatLoading = function formatLoading(loading, _ref) {
  var strictLoading = _ref.strictLoading;

  if (loading) {
    return true;
  }

  if (loading === undefined) {
    if (strictLoading) {
      // treat undefined as true or as undefined
      return true;
    }

    return undefined;
  }

  return false;
};

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region() {
      var _this;

      _classCallCheck(this, Region);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Region).call(this));
      _this.getState = _this.getState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getLoading = _this.getLoading.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getResults = _this.getResults.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getFetchTimes = _this.getFetchTimes.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Region, [{
      key: "getState",
      value: function getState() {
        var store = this.store,
            reducerPath = this.reducerPath;
        var state = store.getState();

        if (reducerPath === null) {
          return state || {};
        }

        return state[reducerPath] || {};
      }
    }, {
      key: "getLoading",
      value: function getLoading(path) {
        var getState = this.getState,
            strictLoading = this.strictLoading;

        var _getState = getState(),
            loadings = _getState.loadings;

        if (!loadings) {
          return true;
        }

        if (Array.isArray(path)) {
          for (var i = 0; i < path.length; i++) {
            if (formatLoading(loadings[path[i]], {
              strictLoading: strictLoading
            })) {
              return true;
            }
          }

          return false;
        }

        return formatLoading(loadings[path], {
          strictLoading: strictLoading
        });
      }
    }, {
      key: "getResults",
      value: function getResults(path) {
        var getState = this.getState;

        var _getState2 = getState(),
            _getState2$results = _getState2.results,
            results = _getState2$results === void 0 ? {} : _getState2$results;

        if (Array.isArray(path)) {
          var ans = [];

          for (var i = 0; i < path.length; i++) {
            var key = path[i];
            ans.push(results[key]);
          }

          return ans;
        }

        return results[path];
      }
    }, {
      key: "getFetchTimes",
      value: function getFetchTimes(path) {
        var getState = this.getState;

        var _getState3 = getState(),
            _getState3$fetchTimes = _getState3.fetchTimes,
            fetchTimes = _getState3$fetchTimes === void 0 ? {} : _getState3$fetchTimes;

        if (Array.isArray(path)) {
          var ans = [];

          for (var i = 0; i < path.length; i++) {
            var key = path[i];
            ans.push(fetchTimes[key]);
          }

          return ans;
        }

        return fetchTimes[path];
      }
    }]);

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;