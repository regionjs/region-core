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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
exports.hoc = function (_a) {
    var Display = _a.Display, Loading = _a.Loading, Error = _a.Error, useProps = _a.useProps, key = _a.key;
    var ConnectWith = function (ownProps) {
        var props = useProps(key);
        var loading = props.loading, error = props.error;
        if (loading) {
            return React.createElement(Loading, __assign({}, props, ownProps));
        }
        if (error) {
            return React.createElement(Error, __assign({}, props, ownProps));
        }
        return React.createElement(Display, __assign({}, props, ownProps));
    };
    return ConnectWith;
};
