"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var increase = function (v) {
    if (v === void 0) { v = 0; }
    return v + 1;
};
var decrease = function (v) {
    if (v === void 0) { v = 0; }
    return v - 1 > 0 ? v - 1 : 0;
};
exports.createStore = function () {
    var state = {};
    var listeners = [];
    var ensure = function (key) {
        if (!state[key]) {
            state[key] = {
                results: {},
            };
        }
    };
    var emit = function () {
        listeners.forEach(function (listener) { return listener(); });
    };
    // only used for test
    var private_setState = function (value) {
        state = value;
    };
    var getAttribute = function (key, attribute) {
        var props = state[key] || {};
        return props[attribute];
    };
    var load = function (payload) {
        var key = payload.key, promise = payload.promise, id = payload.id;
        ensure(key);
        var props = state[key];
        props.id = id; // as well id === undefined
        props.result = props.results[id];
        props.promise = promise;
        props.loading = increase(props.loading);
        emit();
        return state;
    };
    var setCache = function (payload) {
        var key = payload.key, result = payload.result, id = payload.id;
        var currentId = getAttribute(key, 'id');
        ensure(key);
        var props = state[key];
        if (id !== currentId) {
            var snapshot = props.results[id];
            var formatResult = typeof result === 'function' ? result(snapshot) : result;
            props.results[id] = formatResult;
        }
        props.loading = decrease(props.loading);
        // we should trigger useMap & useLoading anyway
        emit();
        return state;
    };
    var set = function (payload) {
        var key = payload.key, result = payload.result, id = payload.id, error = payload.error;
        ensure(key);
        var props = state[key];
        var snapshot = props.results[id];
        var formatResult = typeof result === 'function' ? result(snapshot) : result;
        props.results[id] = formatResult;
        props.loading = decrease(props.loading);
        var fetchTime = new Date().getTime();
        props.fetchTime = fetchTime;
        props.id = id; // as well id === undefined
        props.result = formatResult;
        props.error = error; // as well error ===  undefined
        if (error) {
            console.error(error.message);
        }
        emit();
        return state;
    };
    var reset = function () {
        state = {};
        emit();
    };
    var subscribe = function (listener) {
        listeners.push(listener);
        return function () {
            listeners.splice(listeners.indexOf(listener), 1);
        };
    };
    return { getAttribute: getAttribute, private_setState: private_setState, load: load, set: set, setCache: setCache, reset: reset, subscribe: subscribe };
};
