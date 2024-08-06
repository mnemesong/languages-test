let inp = "AAABBBCCXYZDDDDAAAABB"

type CharsCounter = {
    char: char
    cnt: int
}

let counterReducer (acc: array<CharsCounter>) (it: char) =
    if (((Array.length acc) > 0) && ((Array.last acc).char = it))
    then acc |> Array.mapi (fun (i) (el) -> 
        if (i = (acc.Length - 1)) 
        then { 
            char=el.char 
            cnt=(el.cnt + 1) 
        }
        else el)
    else (Array.concat [| acc; [| { 
        char=it
        cnt=1 
    } |] |])

let encodeReducer (acc: string) (it: CharsCounter) =
    String.concat "" (if (it.cnt > 0)
        then [| acc; it.char.ToString(); it.cnt.ToString() |]
        else [| acc; it.char.ToString() |])

let counter (s: string) =
    Seq.toArray inp
    |> Array.fold counterReducer [||]

let encoder (s: string) = 
    counter s
    |> Array.fold encodeReducer ""

printfn "%A" (encoder inp)