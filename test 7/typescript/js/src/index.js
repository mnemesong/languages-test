"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("./node");
var range = Array.from(Array(1000000).keys())
    .map(function (i) { return Math.random() * 10 - 5; });
var startTime = Date.now();
var result = range
    .map(function (i) { return (0, node_1.activFunction)(i); })
    .reduce(function (acc, el) { return acc + el; });
var finishTime = Date.now();
console.log("result: ", result);
console.log("time: ", finishTime - startTime);
