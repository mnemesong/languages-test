let range = Belt.Array.range(1, 1000000)

let startTime = Js.Date.now()

let result = range
    ->Js.Array2.map(x => ActFunc.act(Js.Int.toFloat(x)))
    ->Js.Array2.reduce((acc: float, x) => (acc +. x), 0.0)

let finishTime = Js.Date.now()

Js.Console.log("result: " ++ Js.Float.toString(result))

Js.Console.log("time: " ++ Js.Float.toString(finishTime -. startTime))