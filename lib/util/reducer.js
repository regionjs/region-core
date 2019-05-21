"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerPrototype_1 = require("./reducerPrototype");
var logger_1 = require("./logger");
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
    reducerPrototype_1.setValueDeep(state, [key, 'loading'], decrease, true);
    return state;
};
exports.reducer = function (state, action, actionTypes, enableLogInDev) {
    var LOAD = actionTypes.LOAD, SET = actionTypes.SET, RESET = actionTypes.RESET;
    switch (action.type) {
        case LOAD: {
            var key = action.payload.key;
            if (enableLogInDev) {
                logger_1.debug(LOAD, key);
            }
            reducerPrototype_1.setValueDeep(state, [key, 'loading'], increase, true);
            return state;
        }
        case SET: {
            var _a = action.payload, key = _a.key, result = _a.result, results = _a.results, id = _a.id, error = _a.error;
            var fetchTime = new Date().getTime();
            var nextState = setKey({ state: state, key: key, result: result, results: results, id: id, fetchTime: fetchTime, error: error });
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
