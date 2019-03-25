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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var logger_1 = require("../util/logger");
var reducerPrototype_1 = require("../util/reducerPrototype");
var store_1 = require("../global/store");
function setKey(_a) {
    var state = _a.state, key = _a.key, fetchTime = _a.fetchTime, result = _a.result, error = _a.error, withLoadEnd = _a.withLoadEnd;
    reducerPrototype_1.setValueDeep(state, ['fetchTimes', key], fetchTime);
    if (result !== undefined) {
        reducerPrototype_1.setValueDeep(state, ['results', key], result);
    }
    reducerPrototype_1.setValueDeep(state, ['errors', key], error); // as well error ===  undefined
    var nextState = reducerPrototype_1.assignValueDeep(state, ['loadings', key], withLoadEnd ? function (v) {
        if (v === void 0) { v = 0; }
        return v - 1;
    } : function (v) {
        if (v === void 0) { v = 0; }
        return v;
    });
    return nextState;
}
exports.default = (function (RegionIn) {
    var Region = /** @class */ (function (_super) {
        __extends(Region, _super);
        function Region(config) {
            var _a;
            var _this = _super.call(this, config) || this;
            _this.private_reducer = function (state, action) {
                if (state === void 0) { state = {}; }
                var _a = _this, enableLog = _a.enableLog, private_actionTypes = _a.private_actionTypes;
                var LOAD = private_actionTypes.LOAD, SET = private_actionTypes.SET, RESET = private_actionTypes.RESET;
                // @ts-ignore
                var enableLogInDev = process.env.NODE_ENV !== 'production' && enableLog;
                switch (action.type) {
                    case LOAD: {
                        var key = action.payload.key;
                        if (enableLogInDev) {
                            logger_1.debug(LOAD, key);
                        }
                        return reducerPrototype_1.assignValueDeep(state, ['loadings', key], function (v) {
                            if (v === void 0) { v = 0; }
                            return v + 1;
                        });
                    }
                    case SET: {
                        var _b = action.payload, key = _b.key, result = _b.result, error = _b.error, withLoadEnd = _b.withLoadEnd;
                        var fetchTime = new Date().getTime();
                        var nextState = setKey({ state: state, key: key, fetchTime: fetchTime, result: result, error: error, withLoadEnd: withLoadEnd });
                        if (enableLogInDev) {
                            if (error) {
                                console.error(error.message);
                            }
                            logger_1.group({ actionType: SET, key: key, result: result, error: error, nextState: nextState });
                        }
                        return nextState;
                    }
                    case RESET: {
                        return {};
                    }
                    default: {
                        return state;
                    }
                }
            };
            var store = store_1.getStore();
            var reducers = store.reducers;
            var _b = _this, name = _b.name, private_reducer = _b.private_reducer;
            store.reducers = __assign({}, reducers, (_a = {}, _a[name] = private_reducer, _a));
            var reducer = redux_1.combineReducers(store.reducers);
            store.replaceReducer(reducer);
            return _this;
        }
        return Region;
    }(RegionIn));
    return Region;
});
