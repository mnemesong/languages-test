open RescriptMocha
let {it:it', it_skip:it_skip'} = module (Promise)
open Mocha

describe ("Yandex1", () => 
{
    describe("addIfUniq", () => 
    {
        it ("addIfUniq 1", () => 
            assert (Yandex1.addIfUniq([1, 2, 3], 2) == [1, 2, 3])
        )

        it ("addIfUniq 2", () => 
            assert (Yandex1.addIfUniq([1, 2, 3], 4) == [1, 2, 3, 4])
        )

    })

    describe("counter", () => {
        it ("counter 1", () =>
            assert (Yandex1.counter([1, 2, 2, 3], 2) == 2))
    })

    describe("intersectWithDoublicates", () => {
        it ("intersectWithDoublicates 1", () =>
            assert (Yandex1.intersectWithDoublicates([1, 2, 3, 2, 0, 2], [5, 1, 2, 7, 3, 2]) 
                == [1, 2, 2, 3]))
    })
})