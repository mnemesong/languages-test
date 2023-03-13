open RescriptMocha
let {it:it', it_skip:it_skip'} = module (Promise)
open Mocha

describe ("Yandex1 task methods", () => {
    describe("addIfUniq [1, 2, 3] 2", () => {
        it ("addIfUniq", () => {
            assert (YandexTasks.Yandex1.addIfUniq([1, 2, 3], 2) == [1, 2, 3])
        })
    })
})