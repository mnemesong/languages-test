import { it, describe } from "mocha";
import * as assert from "assert";
import * as yandex3 from "../src/yandex3";
describe("yandex3 task functions", () => {
    it("groupToRecord", () => {
        assert.deepEqual({ aet: ["eat", "tea"], abt: ["bat"] }, yandex3.groupToRecord(["eat", "tea", "bat"]));
    });
    it("splitRecordToArr", () => {
        assert.deepEqual([["eat", "tea"], ["bat"]], yandex3.splitRecordToArr({ aet: ["eat", "tea"], abt: ["bat"] }));
    });
    it("addElemToPropertyGroup", () => {
        assert.deepEqual({ aet: ["eat", "tea"], abt: ["bat", "tab"] }, yandex3.addElemToPropertyGroup({ aet: ["eat", "tea"], abt: ["bat"] }, "abt", "tab"));
    });
});
