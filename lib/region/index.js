"use strict";
exports.__esModule = true;
var wrapSetConfig_1 = require("./wrapSetConfig");
var wrapReducer_1 = require("./wrapReducer");
var wrapPrivate_1 = require("./wrapPrivate");
var wrapPublic_1 = require("./wrapPublic");
var wrapReact_1 = require("./wrapReact");
var compose = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs.reduce(function (a, b) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return a(b.apply(void 0, args));
    }; }, function (arg) { return arg; });
};
exports["default"] = compose(wrapReact_1["default"], wrapPublic_1["default"], wrapPrivate_1["default"], wrapReducer_1["default"], wrapSetConfig_1["default"])();
