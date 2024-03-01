open RescriptMocha
let {it:it', it_skip:it_skip'} = module (Promise)
open Mocha

describe ("Yandex2", () => 
{
    describe("incCharCounter", () => 
    {
        it("incCharCounter 1", () =>
            assert (Yandex2.incCharCounter({ch: "C", c: 12}) == {ch: "C", c: 13}))
    })

    describe("applyFuncToLastArrayItem", () => 
    {
        it("applyFuncToLastArrayItem 1", () =>
            assert (Yandex2.applyFuncToLastArrayItem([11, 13], (i: 'int) => (i + 2)) == [11, 15]))
    })

    describe("addToCounter", () => 
    {
        it("addToCounter 1", () =>
            assert (Yandex2.addToCounter([{ch: "A", c: 5}, {ch: "B", c:2}], "B") 
                == [{ch: "A", c: 5}, {ch: "B", c:3}]))

        it("addToCounter 2", () =>
            assert (Yandex2.addToCounter([{ch: "A", c: 5}, {ch: "B", c:2}], "A") 
                == [{ch: "A", c: 5}, {ch: "B", c:2}, {ch: "A", c: 1}]))
    })

    describe("cacheString", () =>
    {
        it("cacheString 1", () => 
            assert (Yandex2.cacheString("AAABBBCCXYZDDDDAAAABB") == "A3B3C2XYZD4A4B2"))
    })
})