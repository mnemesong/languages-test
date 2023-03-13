type charCounter = {
    ch: string,
    c: int,
}

let incCharCounter = (cc: charCounter): charCounter
    => {{ch: cc.ch, c: (cc.c + 1)}}

let applyFuncToLastArrayItem = (arr: array<'a>, fun: ('a) => 'a): array<'a>
    => (Js.Array2.length(arr) == 0)
        ? []
        : arr
            ->Js.Array2.slice(~start = 0, ~end_ = Js.Array2.length(arr) - 1)
            ->Js.Array2.concat([fun(arr[Js.Array2.length(arr) - 1])])

let addToCounter = (acc: array<charCounter>, el: string): array<charCounter>
    => (Js.Array2.length(acc) == 0)
        ? [{ch: el, c: 1}]
        : (acc[Js.Array2.length(acc) - 1].ch == el)
            ? applyFuncToLastArrayItem(acc, incCharCounter)
            : acc->Js.Array2.concat([{ch: el, c: 1}])

let cacheString = (str: string)
    => str
        ->Js.String2.split("")
        ->Js.Array2.reduce(addToCounter, [])
        ->Js.Array2.map((el: charCounter) => (el.c > 1) ? (el.ch ++ Js.Int.toString(el.c)): el.ch)
        ->Js.Array2.reduce((acc: string, el: string) => (acc ++ el), "")
