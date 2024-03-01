package hx.test;

using equals.Equal;

import hx.src.Yandex2;
import Sure.sure;

class Yandex2
{
    public static function run() {
        Sys.println("Test run");
        var a = hx.src.Yandex2.run("AAABBBCCXYZDDDDAAAABB");
        Sys.println(a);
        sure(a == "A3B3C2XYZD4A4B2");
    }

    public static function runAll() {
        Yandex2.run();
    }
}