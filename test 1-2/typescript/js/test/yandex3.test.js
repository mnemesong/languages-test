"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = require("assert");
var yandex3 = require("../src/yandex3");
(0, mocha_1.describe)("yandex3 task functions", function () {
    (0, mocha_1.it)("groupToRecord", function () {
        assert.deepEqual({ aet: ["eat", "tea"], abt: ["bat"] }, yandex3.groupToRecord(["eat", "tea", "bat"]));
    });
    (0, mocha_1.it)("splitRecordToArr", function () {
        assert.deepEqual([["eat", "tea"], ["bat"]], yandex3.splitRecordToArr({ aet: ["eat", "tea"], abt: ["bat"] }));
    });
    (0, mocha_1.it)("addElemToPropertyGroup", function () {
        assert.deepEqual({ aet: ["eat", "tea"], abt: ["bat", "tab"] }, yandex3.addElemToPropertyGroup({ aet: ["eat", "tea"], abt: ["bat"] }, "abt", "tab"));
    });
});
