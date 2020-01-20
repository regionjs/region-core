"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var shallowEqual = require("shallowequal");
var util_1 = require("../util");
var toPromise = function (_a) {
    var asyncFunction = _a.asyncFunction, params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            if (typeof asyncFunction === 'function') {
                return [2 /*return*/, asyncFunction(params)];
            }
            // promise
            return [2 /*return*/, asyncFunction];
        });
    });
};
var getCombinedOption = function (optionOrReducer, exOption) {
    if (optionOrReducer === void 0) { optionOrReducer = {}; }
    if (typeof optionOrReducer === 'function') {
        if (exOption) {
            return __assign({ reducer: optionOrReducer }, exOption);
        }
        return { reducer: optionOrReducer };
    }
    return optionOrReducer;
};
var Empty = function () { return null; };
var strictEqual = function (a, b) { return a === b; };
var getSetResult = function (resultOrFunc, snapshot) {
    if (typeof resultOrFunc === 'function') {
        return resultOrFunc(snapshot);
    }
    return resultOrFunc;
};
function createCombinedRegion(initialValue) {
    var _this = this;
    var private_store = util_1.createStore();
    var getInitialValue = function (key) {
        return initialValue && initialValue[key];
    };
    var selectLoadPayload = function (_a) {
        var key = _a.key, promise = _a.promise, params = _a.params, option = _a.option;
        var id = option.id;
        var formatId = util_1.selectId({ id: id, params: params });
        return { key: key, promise: promise, id: formatId };
    };
    var createHooks = function (getFn, equalityFn) {
        return function (key) {
            var _a = react_1.useState({}), forceUpdate = _a[1];
            var ref = react_1.useRef();
            ref.current = getFn(key);
            react_1.useEffect(function () {
                var didUnsubscribe = false;
                var checkForUpdates = function () {
                    if (didUnsubscribe) {
                        return;
                    }
                    var nextValue = getFn(key);
                    /** @see https://github.com/facebook/react/issues/14994 */
                    if (!equalityFn(ref.current, nextValue)) {
                        ref.current = nextValue;
                        forceUpdate({});
                    }
                };
                var unsubscribe = private_store.subscribe(checkForUpdates);
                checkForUpdates();
                return function () {
                    didUnsubscribe = true;
                    unsubscribe();
                };
            }, []);
            return ref.current;
        };
    };
    // ---- APIs ----
    var set = function (key, resultOrFunc) {
        var snapshot = private_store.getAttribute(key, 'result');
        var result = getSetResult(resultOrFunc, snapshot);
        private_store.set({ key: key, result: result });
        return result;
    };
    var reset = private_store.reset;
    var load = function (key, asyncFunction, optionOrReducer, exOption) { return __awaiter(_this, void 0, void 0, function () {
        var option, params;
        return __generator(this, function (_a) {
            option = getCombinedOption(optionOrReducer, exOption);
            if (!util_1.isAsync(asyncFunction)) {
                console.warn('set result directly');
                return [2 /*return*/, set(key, asyncFunction)];
            }
            params = option.params;
            return [2 /*return*/, loadBy(key, asyncFunction, option)(params)];
        });
    }); };
    var loadBy = function (key, asyncFunction, optionOrReducer, exOption) {
        var option = getCombinedOption(optionOrReducer, exOption);
        return function (params) { return __awaiter(_this, void 0, void 0, function () {
            var promise, loadPayload, result, currentPromise, snapshot, initialValueOfKey, payload, error_1, result, initialValueOfKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = toPromise({ asyncFunction: asyncFunction, params: params });
                        loadPayload = selectLoadPayload({ key: key, promise: promise, params: params, option: option });
                        private_store.load(loadPayload);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, promise];
                    case 2:
                        result = _a.sent();
                        currentPromise = private_store.getAttribute(key, 'promise');
                        snapshot = private_store.getAttribute(key, 'result');
                        initialValueOfKey = getInitialValue(key);
                        payload = util_1.selectPayload({ key: key, snapshot: snapshot, result: result, params: params, option: option });
                        if (promise !== currentPromise) {
                            // store result for optimize purpose
                            private_store.setCache(payload);
                            return [2 /*return*/, snapshot || initialValueOfKey];
                        }
                        private_store.set(payload);
                        return [2 /*return*/, payload.result || initialValueOfKey];
                    case 3:
                        error_1 = _a.sent();
                        result = private_store.getAttribute(key, 'result');
                        initialValueOfKey = getInitialValue(key);
                        private_store.set({ key: key, result: result, error: error_1 });
                        return [2 /*return*/, result || initialValueOfKey];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    };
    var getMap = function (key) {
        if (Array.isArray(key)) {
            return key.map(function (k) { return private_store.getAttribute(k, 'results'); });
        }
        return private_store.getAttribute(key, 'results');
    };
    var getId = function (key) {
        if (Array.isArray(key)) {
            return key.map(function (k) { return private_store.getAttribute(k, 'id'); });
        }
        return private_store.getAttribute(key, 'id');
    };
    var getValue = function (key) {
        if (Array.isArray(key)) {
            return key.map(function (k) { return private_store.getAttribute(k, 'result'); });
        }
        return private_store.getAttribute(key, 'result') || getInitialValue(key);
    };
    var getLoading = function (key) {
        if (Array.isArray(key)) {
            return util_1.selectLoading(key.map(function (k) { return private_store.getAttribute(k, 'loading'); }));
        }
        return util_1.selectLoading([private_store.getAttribute(key, 'loading')]);
    };
    var getError = function (key) {
        if (Array.isArray(key)) {
            return util_1.selectError(key.map(function (k) { return private_store.getAttribute(k, 'error'); }));
        }
        return util_1.selectError([private_store.getAttribute(key, 'error')]);
    };
    var getFetchTime = function (key) {
        if (Array.isArray(key)) {
            return util_1.selectFetchTime(key.map(function (k) { return private_store.getAttribute(k, 'fetchTime'); }));
        }
        return util_1.selectFetchTime([private_store.getAttribute(key, 'fetchTime')]);
    };
    var getProps = function (key) {
        var _a = util_1.formatLegacyKeys(key), keys = _a.keys, loadings = _a.loadings, results = _a.results, fetchTimes = _a.fetchTimes, errors = _a.errors;
        var loading = getLoading(loadings);
        var resultMap = util_1.selectResult(keys, getValue(results));
        var fetchTime = getFetchTime(fetchTimes);
        var error = getError(errors);
        return Object.assign({ loading: loading, fetchTime: fetchTime, error: error }, resultMap);
    };
    var connectWith = function (key, Display, option) {
        return connect(key, option)(Display);
    };
    var connect = function (key, option) {
        if (option === void 0) { option = {}; }
        return function (Display) {
            if (Display === void 0) { Display = Empty; }
            var Loading = option.Loading, ErrorComponent = option.Error;
            if (!util_1.isValidConnectKey(key)) {
                throw new Error('invalid key.');
            }
            return util_1.hoc({
                Display: Display,
                Loading: Loading || Display,
                Error: ErrorComponent || Display,
                useProps: useProps,
                key: key,
            });
        };
    };
    var useProps = createHooks(getProps, shallowEqual);
    var useMap = createHooks(getMap, shallowEqual);
    var useId = createHooks(getId, strictEqual);
    var useValue = createHooks(getValue, strictEqual);
    var useLoading = createHooks(getLoading, strictEqual);
    var useError = createHooks(getError, strictEqual);
    var useFetchTime = createHooks(getFetchTime, strictEqual);
    return {
        private_setState_just_for_test: private_store.private_setState,
        set: set,
        reset: reset,
        load: load,
        loadBy: loadBy,
        getMap: getMap,
        getId: getId,
        getValue: getValue,
        getLoading: getLoading,
        getError: getError,
        getFetchTime: getFetchTime,
        getProps: getProps,
        connectWith: connectWith,
        connect: connect,
        useMap: useMap,
        useId: useId,
        useValue: useValue,
        useLoading: useLoading,
        useError: useError,
        useFetchTime: useFetchTime,
        useProps: useProps,
    };
}
// tslint:disable-next-line:max-file-line-count
exports.default = createCombinedRegion;
