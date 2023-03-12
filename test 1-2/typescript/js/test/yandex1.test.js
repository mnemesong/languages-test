"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = require("assert");
var yandex1 = require("../src/yandex1");
(0, mocha_1.describe)("yandex1 task functions", function () {
    (0, mocha_1.it)("countSame", function () {
        assert.equal(3, yandex1.countSame([1, 2, 2, 3, 2], 2));
    });
    (0, mocha_1.it)("intersectWithReplications", function () {
        assert.deepEqual([1, 2, 2, 3], yandex1.intersectWithReplications([1, 2, 3, 2, 2, 0], [5, 1, 2, 7, 3, 2]));
    });
});
