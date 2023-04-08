package hx.src;

import Math;
import Random;
import hx.src.ArcFunc;

class Checker
{
    public static function main() {
        var range = [for (i in 1...1000000) i]
            .map( it -> Random.float(-5, 5) );
        var startDate = Date.now();
        var result = range.map(it -> ArcFunc.calc(it));
        var finishDate = ((r) -> Date.now())(result);
        var msDelta = finishDate.getTime() - startDate.getTime();
        Sys.println("Time delta: " + msDelta + " ms");
        Sys.println("Result len " + result.length);
        Sys.println("Result sum " + Lambda.fold(result, (i, acc) -> acc + i, 0));
    }
}