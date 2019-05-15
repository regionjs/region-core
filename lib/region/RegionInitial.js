"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var util_1 = require("../util");
var RegionInitial = /** @class */ (function () {
    function RegionInitial(config) {
        var _this = this;
        this.name = '_';
        this.private_actionTypes = util_1.getActionTypes('_');
        this.expiredTime = 0;
        this.enableLog = true;
        this.strictLoading = true;
        this.private_setConfig = function (config) {
            if (config === void 0) { config = {}; }
            var name = config.name, expiredTime = config.expiredTime, enableLog = config.enableLog, strictLoading = config.strictLoading, DefaultLoading = config.DefaultLoading, DefaultError = config.DefaultError;
            if (typeof name === 'string') {
                _this.name = name;
                _this.private_actionTypes = util_1.getActionTypes(name);
            }
            if (expiredTime !== undefined) {
                util_1.deprecate('expiredTime is deprecated. You can get fetchTime in getProps method to control your load function.');
                _this.expiredTime = expiredTime;
            }
            if (enableLog !== undefined) {
                _this.enableLog = enableLog;
            }
            if (strictLoading !== undefined) {
                _this.strictLoading = strictLoading;
            }
            if (DefaultLoading !== undefined) {
                _this.DefaultLoading = DefaultLoading;
            }
            if (DefaultError !== undefined) {
                _this.DefaultError = DefaultError;
            }
        };
        this.private_reducer = function (state, action) {
            if (state === void 0) { state = {}; }
            var _a = _this, enableLog = _a.enableLog, private_actionTypes = _a.private_actionTypes;
            // @ts-ignore
            var enableLogInDev = process.env.NODE_ENV !== 'production' && enableLog;
            return util_1.reducer(state, action, private_actionTypes, enableLogInDev);
        };
        if (typeof config === 'object') {
            // TODO decide to fix it or not
            this.private_setConfig(config);
        }
        else {
            this.private_setConfig({ name: config });
        }
        var private_reducer = this.private_reducer;
        this.private_store = redux_1.createStore(private_reducer);
    }
    return RegionInitial;
}());
exports.default = RegionInitial;
