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
var main = function () {
    var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupMain(arr));
};
var groupMain = function (arr) {
    return splitRecordToArr(groupToRecord(arr));
};
var groupToRecord = function (arr) {
    return arr.map(function (i) {
        return {
            el: i,
            g: i.split('').sort().reduce(function (str, ch) { return str.concat(ch); })
        };
    })
        .reduce(function (aggr, i) { return addElemToPropertyGroup(aggr, i.g, i.el); }, {});
};
var splitRecordToArr = function (rec) {
    return Object.keys(rec)
        .map(function (k) { return rec[k]; });
};
var addElemToPropertyGroup = function (obj, propName, val) {
    var _a, _b;
    return obj[propName] ? __assign(__assign({}, obj), (_a = {}, _a[propName] = obj[propName].concat(val), _a)) : __assign(__assign({}, obj), (_b = {}, _b[propName] = [val], _b));
};
main();
