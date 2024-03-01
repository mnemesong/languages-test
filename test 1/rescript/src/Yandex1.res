module Array2 = Js.Array2
module Math = Js.Math

let addIfUniq = (acc: array<'a>, el: 'a): array<'a>
    => ((Array2.indexOf(acc, el) == -1) ? Array2.concat(acc, [el]) : acc)

let counter = (a: array<'a>, el: 'a): int
    => a->Array2.filter((i) => (i == el))
        ->Array2.length

type elData = { el: int, c: int, }
    
let intersectWithDoublicates = (a1: array<'int>, a2: array<'int>)
    => a1->Array2.filter((el) => Array2.some(a2, (i) => i == el))
        ->Array2.reduce(addIfUniq, [])
        ->Array2.map((el): 'elData => {
            el: el, 
            c: Math.min_int(counter(a1, el), counter(a2, el))
        })
        ->Array2.map((el) => Array.make(el.c, el.el))
        ->Array2.reduce(
            (acc: array<'int>, el:array<'int>) => Array2.concat(acc, el), 
            [])