let inp = [| "eat"; "tea"; "tan"; "ate"; "nat"; "bat"|]

type StrGrouper = {
    strings: string[]
    group: string
}

let strToGroup (s: string) =
    s
    |> Seq.toArray
    |> Array.sort
    |> Array.fold (fun (acc: string) (el) -> 
        String.concat  "" [| acc; el.ToString()|]) ""

let groupReducer (acc: StrGrouper[]) (el: string) =
    let group = strToGroup el
    match (acc |> Array.tryFindIndex (fun v -> v.group = group)) with
    | Some(idx) -> acc |> Array.mapi (fun (i) (v) -> 
        if (idx = i) then {
            strings = Array.concat [| v.strings; [| el |] |]
            group = v.group
        } else v)
    | None -> Array.concat [| acc; [| {
        strings= [| el |]
        group = group
    } |] |]

let result = 
    inp
    |> Array.fold groupReducer [||]
    |> Array.map (fun v -> v.strings)

printfn "%A" result
