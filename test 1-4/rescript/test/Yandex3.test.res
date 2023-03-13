open RescriptMocha
let {it:it', it_skip:it_skip'} = module (Promise)
open Mocha

describe("Yandex3", () => 
{
    describe("sortStr", () =>
    {
        it("sortStr 1", () =>
            assert (Yandex3.sortStr("badoc") == "abcdo"))
    })

    describe("markStr", () =>
    {
        it("markStr 1", () =>
            assert (Yandex3.markStr("badoc") == {s: "badoc", m: "abcdo"}))
    })

    describe("findStoreByMark", () =>
    {
        it("findStoreByMark 1", () =>
            assert (Yandex3.findStoreByMark( [{stor: ["a"], m: "a"}, {stor: ["b"], m: "b"}], "a")
                ->Js.Option.getExn == {stor: ["a"], m: "a"}))
        
        it("findStoreByMark 2", () =>
            assert (Yandex3.findStoreByMark( [{stor: ["a"], m: "a"}, {stor: ["b"], m: "b"}], "c")
                ->Js.Option.isNone == true))
    })

    describe("groupMarkedStrs", () =>
    {
        it("groupMarkedStrs 1", () =>
                assert (Yandex3.groupMarkedStrs(
                        [{stor: ["a"], m: "a"}, {stor: ["b"], m: "b"}], 
                        {s: "b", m: "b"}
                    ) == [{stor: ["a"], m: "a"}, {stor: ["b", "b"], m: "b"}]))

        it("groupMarkedStrs 2", () =>
                assert (Yandex3.groupMarkedStrs(
                        [{stor: ["a"], m: "a"}, {stor: ["ba"], m: "ab"}], 
                        {s: "ab", m: "ab"}
                    ) == [{stor: ["a"], m: "a"}, {stor: ["ba", "ab"], m: "ab"}]))

        it("groupMarkedStrs 3", () =>
                assert (Yandex3.groupMarkedStrs(
                        [{stor: ["a"], m: "a"}, {stor: ["b"], m: "b"}], 
                        {s: "c", m: "c"}
                    ) == [{stor: ["a"], m: "a"}, {stor: ["b"], m: "b"}, {stor: ["c"], m: "c"}]))
    })

    describe("groupStrings", () =>
    {
        it("groupStrings 1", () =>
            assert (Yandex3.groupStrings(["eat", "tea", "tan", "ate", "nat", "bat"])
                == [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]))
    })
})