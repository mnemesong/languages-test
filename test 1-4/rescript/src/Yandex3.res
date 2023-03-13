module Array2 = Js.Array2
module String2 = Js.String2
module Option = Js.Option

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
        ->String2.split("")
        ->Array2.sortInPlace
        ->Array2.reduce((acc: string, el) => (acc ++ el), "")

let markStr = (str: string): strMarked
    => {{s: str, m: sortStr(str)}}

let findStoreByMark = (arr: array<strMarkedStor>, m: string): option<strMarkedStor>
    => arr
        ->Array2.find((el) => (el.m == m))

let groupMarkedStrs = (acc: array<strMarkedStor>, el: strMarked): array<strMarkedStor>
    => (acc->Array2.length == 0)
        ? [{stor: [el.s], m: el.m}]
        : acc
            ->Array2.filter((i) => (i.m != el.m))
            ->Array2.concat(
                (findStoreByMark(acc, el.m)->Js.Option.isNone == true)
                    ? [{stor: [el.s], m: el.m}]
                    : [{
                        stor: Option.getExn(findStoreByMark(acc, el.m)).stor
                            ->Array2.concat([el.s]), 
                        m: el.m
                    }]
            )

let groupStrings = (arr: array<string>): array<array<string>>
    => arr
        ->Array2.map(markStr)
        ->Array2.reduce(groupMarkedStrs, [])
        ->Array2.map((el) => el.stor)