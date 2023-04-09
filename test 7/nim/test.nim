import std/math
import std/sequtils
import std/random
import std/times

func calcNode(x: float32): float32 =
    (1 / (1 + (exp(-1 * x))))

proc run(): void =
    let arr = repeat(0, 1000000);
    let arr2 = map(arr, proc(x: int): float32 = (rand(10.0) - 5))
    let startTime = getTime()
    let calculated = map(arr2, proc(x: float32): float32 = calcNode(x))
    let reduced = foldl(calculated, a + b, float32(0))
    let endTime = getTime()
    let timeDelta = endTime - startTime
    echo "Time diff: ", timeDelta

run()
