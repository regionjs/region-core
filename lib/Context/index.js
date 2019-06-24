"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Prop_1 = require("../Prop");
exports.createContext = function (defaultValue) {
    var symbol = Symbol();
    var Context = react_1.createContext(symbol);
    var region = new Prop_1.default('data');
    region.set(defaultValue);
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
