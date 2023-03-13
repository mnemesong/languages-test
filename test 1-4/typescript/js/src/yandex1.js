"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectWithReplications = exports.countSame = void 0;
var main = function () {
    var arr1 = [1, 2, 3, 2, 2, 0];
    var arr2 = [5, 1, 2, 7, 3, 2];
    console.log((0, exports.intersectWithReplications)(arr1, arr2));
};
var countSame = function (arr, el) {
    return arr.filter(function (k) { return (k === el); }).length;
};
exports.countSame = countSame;
var intersectWithReplications = function (arr1, arr2) {
    return arr1.filter(function (i) { return arr2.includes(i); }) //intersect
        .filter(function (v, i, arr) { return (arr.indexOf(v) === i); }) //uniq
        .map(function (el) { return { el: el, c: Math.min((0, exports.countSame)(arr1, el), (0, exports.countSame)(arr2, el)) }; })
        .map(function (el) { return Array(el.c).fill(el.el); })
        .reduce(function (acc, cur) { return acc.concat(cur); });
};
exports.intersectWithReplications = intersectWithReplications;
main();
