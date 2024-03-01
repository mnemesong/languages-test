package hx.src;

import haxe.ds.List;
import hx.src.Counter;
import Std;

using hx.src.ArrayExt;
using Lambda;

class Yandex2
{
    @:pure
    public static function run(str1: String): String
    {
        var symbols = str1.split("");
        var foldF = (s: String, acc: Array<Counter>) -> 
            (acc.length == 0)
                ? acc.concat([new Counter(s, 1)])
                : ((acc.last().el == s)
                    ? (acc.updateLast((el) -> new Counter(el.el, el.c + 1)))
                    : (acc.concat([new Counter(s, 1)])));
        var result: Array<String> = Lambda.fold(symbols, foldF, [])
            .map((el: Counter) -> el.el + ((el.c > 1) ? Std.string(el.c) : ""));
        return Lambda.fold(result, (el: String, acc: String) -> (acc + el), "");
    }
    
    public static function main() {
        var str1 = "AAABBBCCXYZDDDDAAAABB";
        Sys.println(Yandex2.run(str1));
    }
}