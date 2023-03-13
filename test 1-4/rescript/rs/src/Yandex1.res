let addIfUniq = (acc: array<'a>, el: 'a): array<'a>
    => ((Js.Array2.indexOf(acc, el) == -1) ? Js.Array2.concat(acc, [el]) : acc)
    
let intersectWithDoublicates = (arr1: array<'int>, arr2: array<'int>)
    => arr1
        ->Js.Array2.filter((el) => Js.Array2.some(arr2, (i) => i == el))
        ->Js.Array2.reduce(addIfUniq, [])