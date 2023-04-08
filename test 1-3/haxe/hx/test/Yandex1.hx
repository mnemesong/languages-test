package hx.test;

using equals.Equal;

import hx.src.Yandex1;
import Sure.sure;

class Yandex1
{
    public static function run() {
        Sys.println("Test run");
        var arr1 = [1, 2, 3, 2, 2, 0];
        var arr2 = [5, 1, 2, 7, 3, 2];
        sure(hx.src.Yandex1.run(arr1, arr2).equals([1, 2, 2, 3]));
    }

    public static function cntr() {
        Sys.println("Test cntr");
        sure(hx.src.Yandex1.cntr(2, [1, 2, 2, 3], 0, 0) == 2);
        sure(hx.src.Yandex1.cntr(2, [1, 2, 2, 3, 2], 3, 2) == 3);
    }

    public static function runAll() {
        Yandex1.run();
        Yandex1.cntr();
    }
}