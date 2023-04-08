package hx.test;

using equals.Equal;

import hx.src.ArcFunc;
import Sure.sure;

class ArcFunc
{
    public static function calc() {
        Sys.println("Test run");
        sure(hx.src.ArcFunc.calc(0).equals(0.5));
    }

    public static function runAll() {
        calc();
    }
}