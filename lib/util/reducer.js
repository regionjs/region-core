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
var setKey = function (_a) {
    var state = _a.state, key = _a.key, result = _a.result, results = _a.results, id = _a.id, fetchTime = _a.fetchTime, error = _a.error;
    reducerPrototype_1.setValueDeep(state, [key, 'fetchTime'], fetchTime);
    if (id !== undefined) {
        reducerPrototype_1.setValueDeep(state, [key, 'results'], results);
        reducerPrototype_1.setValueDeep(state, [key, 'id'], id);
    }
    else if (result !== undefined) {
        reducerPrototype_1.setValueDeep(state, [key, 'result'], result);
    }
    reducerPrototype_1.setValueDeep(state, [key, 'error'], error); // as well error ===  undefined
    reducerPrototype_1.setValueDeep(state, [key, 'loading'], decrease);
    return state;
};
exports.reducer = function (state, action, actionTypes) {
    var LOAD = actionTypes.LOAD, SET = actionTypes.SET, RESET = actionTypes.RESET;
    switch (action.type) {
        case LOAD: {
            var key = action.payload.key;
            reducerPrototype_1.setValueDeep(state, [key, 'loading'], increase);
            return state;
        }
        case SET: {
            var _a = action.payload, key = _a.key, result = _a.result, results = _a.results, id = _a.id, error = _a.error;
            var fetchTime = new Date().getTime();
            var nextState = setKey({ state: state, key: key, result: result, results: results, id: id, fetchTime: fetchTime, error: error });
            if (error) {
                console.error(error.message);
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
