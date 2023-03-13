let addIfUniq = (acc: array<'a>, el: 'a): array<'a>
    => ((Js.Array2.indexOf(acc, el) == -1) ? Js.Array2.concat(acc, [el]) : acc)

let counter = (arr: array<'a>, el: 'a): int
    => arr
        ->Js.Array2.filter((i) => (i == el))
        ->Js.Array2.length

type elData = {
    el: int,
    c: int,
}
    
let intersectWithDoublicates = (arr1: array<'int>, arr2: array<'int>)
    => arr1
        ->Js.Array2.filter((el) => Js.Array2.some(arr2, (i) => i == el))
        ->Js.Array2.reduce(addIfUniq, [])
        ->Js.Array2.map((el): 'elData => {el: el, c: Js.Math.min_int(counter(arr1, el), counter(arr2, el))})
        ->Js.Array2.map((el) => Array.make(el.c, el.el))
        ->Js.Array2.reduce((acc: array<'int>, el:array<'int>) => Js.Array2.concat(acc, el), [])