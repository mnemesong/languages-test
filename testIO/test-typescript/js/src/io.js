"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioOutput = exports.ioQuestion = void 0;
var readline_1 = require("readline");
var ioQuestion = function (q, f) {
    var rl = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(q, function (a) {
        f(a);
        rl.close();
    });
};
exports.ioQuestion = ioQuestion;
var ioOutput = function (s) {
    console.log(s);
};
exports.ioOutput = ioOutput;
