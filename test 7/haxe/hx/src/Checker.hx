package hx.src;

import Math;
import hx.src.ArcFunc;

class Checker
{
    public static function main() {
        var range = [for (i in 1...1000000) i];
        var startDate = Date.now();
        var result = range.map(it -> ArcFunc.calc(it));
        var finishDate = Date.now();
        var msDelta = finishDate.getTime() - startDate.getTime();
        Sys.println("Time delta: " + msDelta + " ms");
        Sys.println("Result len " + result.length);
    }
}