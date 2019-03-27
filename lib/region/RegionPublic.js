"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var formatResult_1 = require("../util/formatResult");
var isAsync_1 = require("../util/isAsync");
var shouldThrottle_1 = require("../util/shouldThrottle");
var store_1 = require("../global/store");
var RegionPrivate_1 = require("./RegionPrivate");
var toPromise = function (_a) {
    var asyncFunction = _a.asyncFunction, params = _a.params;
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            if (typeof asyncFunction === 'function') {
                return [2 /*return*/, asyncFunction(params)];
            }
            // promise
            return [2 /*return*/, asyncFunction];
        });
    });
};
var RegionPublic = /** @class */ (function (_super) {
    __extends(RegionPublic, _super);
    function RegionPublic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.set = function (key, result, option) {
            var setBy = _this.setBy;
            return setBy(key, option)(result);
        };
        /**
         * @param format A function format result to other data structure
         */
        _this.setBy = function (key, _a) {
            var format = (_a === void 0 ? {} : _a).format;
            var _b = _this, getResults = _b.private_getResults, private_actionTypes = _b.private_actionTypes;
            var SET = private_actionTypes.SET;
            var dispatch = store_1.getStore().dispatch;
            var snapshot = getResults(key);
            // TODO optimize setBy
            return function (result) {
                var formattedResult = formatResult_1.formatResult({ result: result, snapshot: snapshot, format: format });
                dispatch({ type: SET, payload: { key: key, result: formattedResult } });
                return formattedResult;
            };
        };
        _this.reset = function () {
            var private_actionTypes = _this.private_actionTypes;
            var RESET = private_actionTypes.RESET;
            var dispatch = store_1.getStore().dispatch;
            dispatch({ type: RESET });
        };
        _this.load = function (key, asyncFunction, option) {
            if (option === void 0) { option = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var set, loadBy;
                return __generator(this, function (_a) {
                    if (!isAsync_1.isAsync(asyncFunction)) {
                        console.warn('set result directly');
                        set = this.set;
                        return [2 /*return*/, set(key, asyncFunction, option)];
                    }
                    loadBy = this.loadBy;
                    return [2 /*return*/, loadBy(key, asyncFunction, option)(option.params)];
                });
            });
        };
        /**
         * @param option.params asyncFunction may need
         * @param option.format A function format result to other data structure
         * @param option.forceUpdate true | false
         */
        _this.loadBy = function (key, asyncFunction, option) {
            if (option === void 0) { option = {}; }
            var forceUpdate = option.forceUpdate, format = option.format, id = option.id;
            var _a = _this, getResults = _a.private_getResults, private_actionTypes = _a.private_actionTypes, expiredTime = _a.expiredTime, getFetchTimes = _a.private_getFetchTimes;
            var LOAD = private_actionTypes.LOAD, SET = private_actionTypes.SET;
            var dispatch = store_1.getStore().dispatch;
            var snapshot = getResults(key);
            // TODO optimize loadBy
            return function (params) { return __awaiter(_this, void 0, void 0, function () {
                var result, formattedResult, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (shouldThrottle_1.shouldThrottle({ asyncFunction: asyncFunction, forceUpdate: forceUpdate, key: key, snapshot: snapshot, id: id, expiredTime: expiredTime, getFetchTimes: getFetchTimes })) {
                                return [2 /*return*/, snapshot];
                            }
                            dispatch({ type: LOAD, payload: { key: key } });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, toPromise({ asyncFunction: asyncFunction, params: params })];
                        case 2:
                            result = _a.sent();
                            formattedResult = formatResult_1.formatResult({ result: result, snapshot: snapshot, format: format, id: id });
                            dispatch({ type: SET, payload: { key: key, result: formattedResult, withLoadEnd: true } });
                            return [2 /*return*/, formattedResult];
                        case 3:
                            error_1 = _a.sent();
                            dispatch({ type: SET, payload: { key: key, result: undefined, error: error_1, withLoadEnd: true } });
                            return [2 /*return*/, undefined];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
        };
        return _this;
    }
    return RegionPublic;
}(RegionPrivate_1.default));
exports.default = RegionPublic;
