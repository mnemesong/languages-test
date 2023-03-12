import {it, describe} from "mocha";
import  * as assert from "assert";
import * as yandex1 from "../src/yandex1";

describe("yandex1 task functions", () => {
    it("countSame", () => {
        assert.equal(3, yandex1.countSame([1, 2, 2, 3, 2], 2));
    });
});