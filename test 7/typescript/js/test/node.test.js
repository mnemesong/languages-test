"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = require("assert");
var node_1 = require("../src/node");
(0, mocha_1.describe)("test activ function", function () {
    (0, mocha_1.it)("test activ function 0.5", function () {
        assert.ok(Math.abs((0, node_1.activFunction)(0) - 0.5) < 0.01);
    });
    (0, mocha_1.it)("test activ function -10", function () {
        assert.ok(Math.abs((0, node_1.activFunction)(-10) - 0) < 0.01);
    });
    (0, mocha_1.it)("test activ function 10", function () {
        assert.ok(Math.abs(((0, node_1.activFunction)(10) - 1)) < 0.01);
    });
});
