import { it, describe } from "mocha";
import  * as assert from "assert";
import { activFunction } from "../src/node";

describe("test activ function", () => {
    it("test activ function 0.5", () => {
        assert.ok(Math.abs(activFunction(0) - 0.5) < 0.01)
    })
    it("test activ function -10", () => {
        assert.ok(Math.abs(activFunction(-10) - 0) < 0.01)
    })
    it("test activ function 10", () => {
        assert.ok(Math.abs((activFunction(10) - 1)) < 0.01)
    })
})