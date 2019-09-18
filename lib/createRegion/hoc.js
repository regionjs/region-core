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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.hoc = function (_a) {
    var Component = _a.Component, _b = _a.alias, alias = _b === void 0 ? 'value' : _b, useProps = _a.useProps;
    var Connect = function (ownProps) {
        var props = useProps();
        props[alias] = props.value;
        return React.createElement(Component, __assign({}, props, ownProps));
    };
    return Connect;
};
