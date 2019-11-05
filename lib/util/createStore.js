"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerPrototype_1 = require("./reducerPrototype");
var increase = function (v) {
    if (v === void 0) { v = 0; }
    return v + 1;
};
var decrease = function (v) {
    if (v === void 0) { v = 0; }
    return v - 1 > 0 ? v - 1 : 0;
};
var setKey = function (state, _a) {
    var key = _a.key, result = _a.result, results = _a.results, id = _a.id, error = _a.error;
    var fetchTime = new Date().getTime();
    reducerPrototype_1.setValueDeep(state, [key, 'fetchTime'], fetchTime);
    reducerPrototype_1.setValueDeep(state, [key, 'id'], id); // as well id === undefined
    if (id !== undefined) {
        reducerPrototype_1.setValueDeep(state, [key, 'results'], results);
    }
    else {
        reducerPrototype_1.setValueDeep(state, [key, 'result'], result);
    }
    reducerPrototype_1.setValueDeep(state, [key, 'error'], error); // as well error ===  undefined
    reducerPrototype_1.setValueDeep(state, [key, 'loading'], decrease);
    return state;
};
exports.createStore = function () {
    var state = {};
    var listeners = [];
    var emit = function () {
        listeners.forEach(function (listener) { return listener(); });
    };
    var getState = function () { return state; };
    var load = function (payload) {
        var key = payload.key;
        reducerPrototype_1.setValueDeep(state, [key, 'loading'], increase);
        emit();
        return state;
    };
    var set = function (payload) {
        var key = payload.key, result = payload.result, results = payload.results, id = payload.id, error = payload.error;
        var nextState = setKey(state, { key: key, result: result, results: results, id: id, error: error });
        if (error) {
            console.error(error.message);
        }
        state = nextState;
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
    return { getState: getState, load: load, set: set, reset: reset, subscribe: subscribe };
};
