"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var createRegion_1 = require("../createRegion/createRegion");
exports.createContext = function (defaultValue) {
    var symbol = Symbol();
    var Context = react_1.createContext(symbol);
    var region = createRegion_1.default(defaultValue);
    Context.write = region.set;
    Context.read = region.getValue;
    Context.symbol = symbol;
    Context.region = region;
    return Context;
};
exports.useContext = function (Context) {
    var region = Context.region, symbol = Context.symbol;
    var providedValue = react_1.useContext(Context);
    var value = region.useValue();
    if (providedValue === symbol) {
        return value;
    }
    return providedValue;
};
