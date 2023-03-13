type strMarked = {
    s: string,
    m: string,
}

type strMarkedStor = {
    stor: array<string>,
    m: string,
}

let sortStr = (s: string): string
    => s
        ->Js.String2.split("")
        ->Js.Array2.sortInPlace
        ->Js.Array2.reduce((acc: string, el) => (acc ++ el), "")

let markStr = (str: string): strMarked
    => {{s: str, m: sortStr(str)}}

let findStoreByMark = (arr: array<strMarkedStor>, m: string): option<strMarkedStor>
    => arr
        ->Js.Array2.find((el) => (el.m == m))

let groupMarkedStrs = (acc: array<strMarkedStor>, el: strMarked): array<strMarkedStor>
    => (acc->Js.Array2.length == 0)
        ? [{stor: [el.s], m: el.m}]
        : acc
            ->Js.Array2.filter((i) => (i.m != el.m))
            ->Js.Array2.concat(
                (findStoreByMark(acc, el.m)->Js.Option.isNone == true)
                    ? [{stor: [el.s], m: el.m}]
                    : [{
                        stor: Js.Option.getExn(findStoreByMark(acc, el.m)).stor
                            ->Js.Array2.concat([el.s]), 
                        m: el.m
                    }]
            )

let groupStrings = (arr: array<string>): array<array<string>>
    => arr
        ->Js.Array2.map(markStr)
        ->Js.Array2.reduce(groupMarkedStrs, [])
        ->Js.Array2.map((el) => el.stor)