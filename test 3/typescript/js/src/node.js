"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activFunction = void 0;
var activFunction = function (val) {
    return (1 / (1 + (Math.exp(-1 * val))));
};
exports.activFunction = activFunction;
