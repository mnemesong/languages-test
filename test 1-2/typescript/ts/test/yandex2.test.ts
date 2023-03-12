import {it, describe} from "mocha";
import  * as assert from "assert";
import * as yandex2 from "../src/yandex2";

describe("yandex1 task functions", () => 
{
    it("hashStr", () => {
        assert.equal("A3B3C2XYZD4A4B2", yandex2.hashStr("AAABBBCCXYZDDDDAAAABB"));
    });
});