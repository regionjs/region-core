"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var createSwitchIdFlag = function () {
    var switchIdFlag = false;
    var getSwitchIdFlag = function () { return switchIdFlag; };
    var setSwitchIdFlag = function (value) {
        switchIdFlag = value;
    };
    return { getSwitchIdFlag: getSwitchIdFlag, setSwitchIdFlag: setSwitchIdFlag };
};
var createAcceptLatestFlag = function () {
    var acceptLatestFlag = false;
    var getAcceptLatestFlag = function () { return acceptLatestFlag; };
    var setAcceptLatestFlag = function (value) {
        acceptLatestFlag = value;
    };
    return { getAcceptLatestFlag: getAcceptLatestFlag, setAcceptLatestFlag: setAcceptLatestFlag };
};
exports.getSwitchIdFlag = (_a = createSwitchIdFlag(), _a.getSwitchIdFlag), exports.setSwitchIdFlag = _a.setSwitchIdFlag;
exports.getAcceptLatestFlag = (_b = createAcceptLatestFlag(), _b.getAcceptLatestFlag), exports.setAcceptLatestFlag = _b.setAcceptLatestFlag;
