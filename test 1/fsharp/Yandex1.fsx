let in1 = [| 1; 2; 3; 2; 0; 2 |]
let in2 = [| 5; 1; 2; 7; 3; 2 |]

let counterReducer (acc: Map<int, int>) (it: int) =
    if (Map.keys acc).Contains(it)
    then acc |> Map.map(fun k x -> if (k = it) then (x + 1) else x)
    else acc |> Map.add it 1

let counter1 = in1 |> Array.fold counterReducer Map.empty

let counter2 = in2 |> Array.fold counterReducer Map.empty

let getMapValOrNull (map: Map<int, int>) (k: int) =
    map |> Map.tryFind(k) |> Option.defaultValue 0

let getMapMaxVal (map: Map<int, int>) =
    (Array.ofSeq (Map.values map)) |> Array.fold max 0

let calcMaxVal (maps: array<Map<int, int>>) =
    if ((Array.length maps) = 0)
    then 0
    else maps |> Array.fold (fun (acc: int) (m: Map<int, int>) -> max acc (getMapMaxVal m)) 0 

let getMinOfMaps (k: int) (maps: array<Map<int, int>>) =
    if ((Array.length maps) = 0)
    then 0
    else maps |> Array.fold (fun (acc: int) (m: Map<int, int>) -> 
        min (getMapValOrNull m k) (calcMaxVal maps)) 0

let makefinalReducer (maps: array<Map<int, int>>) (acc: array<int>) (k: int) =
    Array.concat [|
        acc; 
        Array.replicate (getMinOfMaps k maps) k
    |]

let result = 
    (Array.ofSeq (counter1 |> Map.keys)) 
    |> Array.fold (makefinalReducer [| counter1; counter2 |]) [||]

printfn "%A" result
