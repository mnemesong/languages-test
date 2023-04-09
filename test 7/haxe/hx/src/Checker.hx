package hx.src;

import Math;
import Random;
import hx.src.ArcFunc;

class Checker
{
    public static function main() {
        var range = [for (i in 1...1000000) i]
            .map( it -> Random.float(-5, 5) );
        @:runtimeValue
        var startDate = Sys.time();
        @:runtimeValue
        var result = range.map(it -> ArcFunc.calc(it));
        @:runtimeValue
        var resSum = Lambda.fold(result, (i, acc) -> acc + i, 0);
        @:runtimeValue
        var finishDate = Sys.time();
        @:runtimeValue
        var msDelta = finishDate - startDate;
        Sys.println("Time delta: " + msDelta + " ms");
        Sys.println("Result len " + result.length);
        Sys.println("Result sum " + resSum);
    }
}