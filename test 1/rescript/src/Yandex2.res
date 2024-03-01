module Array2 = Js.Array2
module Int = Js.Int
module String2 = Js.String2

type charCounter = {ch: string, c: int}

let incCharCounter = (cc: charCounter): charCounter => {{ch: cc.ch, c: cc.c + 1}}

let applyFuncToLastArrayItem = (a: array<'a>, fun: 'a => 'a): array<'a> =>
  Array2.length(a) == 0
    ? []
    : a
      ->Array2.slice(~start=0, ~end_=Array2.length(a) - 1)
      ->Array2.concat([fun(a[Array2.length(a) - 1])])

let addToCounter = (acc: array<charCounter>, el: string): array<charCounter> =>
  Array2.length(acc) == 0
    ? [{ch: el, c: 1}]
    : acc[Array2.length(acc) - 1].ch == el
    ? applyFuncToLastArrayItem(acc, incCharCounter)
    : acc->Array2.concat([{ch: el, c: 1}])

let cacheString = (s: string) =>
  s
  ->String2.split("")
  ->Array2.reduce(addToCounter, [])
  ->Array2.map((el: charCounter) => el.c > 1 ? el.ch ++ Int.toString(el.c) : el.ch)
  ->Array2.reduce((acc: string, el: string) => acc ++ el, "")
