module Array2 = Js.Array2
module Math = Js.Math

let addIfUniq = (acc: array<'a>, el: 'a): array<'a>
    => ((Array2.indexOf(acc, el) == -1) ? Array2.concat(acc, [el]) : acc)

let counter = (arr: array<'a>, el: 'a): int
    => arr
        ->Array2.filter((i) => (i == el))
        ->Array2.length

type elData = {
    el: int,
    c: int,
}
    
let intersectWithDoublicates = (arr1: array<'int>, arr2: array<'int>)
    => arr1
        ->Array2.filter((el) => Array2.some(arr2, (i) => i == el))
        ->Array2.reduce(addIfUniq, [])
        ->Array2.map((el): 'elData => {
            el: el, 
            c: Math.min_int(counter(arr1, el), counter(arr2, el))
        })
        ->Array2.map((el) => Array.make(el.c, el.el))
        ->Array2.reduce(
            (acc: array<'int>, el:array<'int>) => Array2.concat(acc, el), 
            [])