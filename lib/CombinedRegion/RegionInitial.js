"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var util_1 = require("../util");
var RegionInitial = /** @class */ (function () {
    function RegionInitial(config, disableDeprecateLog) {
        var _this = this;
        this.name = 'region';
        this.private_actionTypes = util_1.getActionTypes('region');
        this.expiredTime = 0;
        this.enableLog = false;
        this.strictLoading = true;
        this.private_setConfig = function (config) {
            if (config === void 0) { config = {}; }
            var name = config.name, expiredTime = config.expiredTime, enableLog = config.enableLog, strictLoading = config.strictLoading, DefaultLoading = config.DefaultLoading, DefaultError = config.DefaultError;
            if (typeof name === 'string') {
                _this.name = name;
                _this.private_actionTypes = util_1.getActionTypes(name);
                _this.enableLog = true;
            }
            if (expiredTime !== undefined) {
                util_1.deprecate('expiredTime is deprecated. You can get fetchTime in getProps method to control your load function.');
                _this.expiredTime = expiredTime;
            }
            if (enableLog !== undefined) {
                util_1.deprecate('enableLog is deprecated. You can set name to enableLog.');
                _this.enableLog = enableLog;
            }
            if (strictLoading !== undefined) {
                util_1.deprecate('strictLoading is deprecated. set an initialValue to prevent it loading if you want to.');
                _this.strictLoading = strictLoading;
            }
            if (DefaultLoading !== undefined) {
                util_1.deprecate('DefaultLoading is deprecated to make migration from connect to useProps fluently.');
                _this.DefaultLoading = DefaultLoading;
            }
            if (DefaultError !== undefined) {
                util_1.deprecate('DefaultError is deprecated to make migration from connect to useProps fluently.');
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
        if (!disableDeprecateLog) {
            util_1.deprecate('new Region() && new CombinedRegion() is deprecated. Use createCombinedRegion() instead.');
        }
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
