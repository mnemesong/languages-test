"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = require("assert");
var yandex2 = require("../src/yandex2");
(0, mocha_1.describe)("yandex2 task functions", function () {
    (0, mocha_1.it)("hashStr", function () {
        assert.equal("A3B3C2XYZD4A4B2", yandex2.hashStr("AAABBBCCXYZDDDDAAAABB"));
    });
});
