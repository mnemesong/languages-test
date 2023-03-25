module String2 = Js.String2
module Option = Js.Option
module Array = Js.Array

type strMarked = {
    s: string,
    m: string,
}

type strMarkedStor = {
    stor: array<string>,
    m: string,
}

let sortStr = (s: string): string
    => s->String2.split("")
        |> Array.sortInPlace
        |> Array.reduce((acc: string, el) => (acc ++ el), "")

let markStr = (str: string): strMarked
    => {{s: str, m: sortStr(str)}}

let findStoreByMark = (arr: array<strMarkedStor>, m: string): option<strMarkedStor>
    => arr |> Array.find((el) => (el.m == m))

let groupMarkedStrs = (acc: array<strMarkedStor>, el: strMarked): array<strMarkedStor>
    => (acc |> Array.length == 0)
        ? [{stor: [el.s], m: el.m}]
        : acc
            |> Array.filter((i) => (i.m != el.m))
            |> Array.concat((findStoreByMark(acc, el.m)->Js.Option.isNone == true)
                ? [{stor: [el.s], m: el.m}]
                : [{
                    stor: Option.getExn(findStoreByMark(acc, el.m)).stor
                        |> Array.concat([el.s]), 
                    m: el.m
                }]
            )

let groupStrings = (a: array<string>): array<array<string>>
    => a|> Array.map(markStr)
        |> Array.reduce(groupMarkedStrs, [])
        |> Array.map((el) => el.stor)