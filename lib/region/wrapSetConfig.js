"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getActionTypes_1 = require("../util/getActionTypes");
exports.default = (function () {
    var Region = /** @class */ (function () {
        function Region(config) {
            var _this = this;
            this.name = '_';
            this.private_setConfig = function (config) {
                if (config === void 0) { config = {}; }
                var name = config.name, expiredTime = config.expiredTime, enableLog = config.enableLog, strictLoading = config.strictLoading, DefaultLoading = config.DefaultLoading, DefaultError = config.DefaultError;
                if (name !== undefined) {
                    if (typeof name === 'string') {
                        _this.name = name;
                    }
                    else {
                        console.error('Region name should be string');
                    }
                    _this.private_actionTypes = getActionTypes_1.default(name);
                }
                if (expiredTime !== undefined) {
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
            this.private_setConfig({
                expiredTime: 0,
                enableLog: true,
                strictLoading: true,
            });
            if (typeof config === 'object') {
                this.private_setConfig(config);
            }
            else {
                // TODO decide to fix it or not
                this.private_setConfig({ name: config });
            }
        }
        return Region;
    }());
    return Region;
});
