package hx.test;

using equals.Equal;

import hx.src.Yandex1;
import Sure.sure;

class Yandex1
{
    public static function intersecDublicated() {
        Sys.println("Test intersecDublicated");
        var arr1 = [1, 2, 3, 2, 2, 0];
        var arr2 = [5, 1, 2, 7, 3, 2];
        sure(hx.src.Yandex1.intersecDublicated(arr1, arr2).equals([1, 2, 2, 3]));
    }

    public static function foldUnique() {
        Sys.println("Test foldUnique");
        sure(hx.src.Yandex1.foldUniq([1, 2, 3], [1]).equals([1, 2, 3]));
        sure(hx.src.Yandex1.foldUniq([1, 2, 3], [4]).equals([1, 2, 3, 4]));
        sure(hx.src.Yandex1.foldUniq([1, 2, 3], [3, 2]).equals([1, 2, 3]));
    }

    public static function counter() {
        Sys.println("Test counter");
        sure(hx.src.Yandex1.counter(2, [1, 2, 2, 3], 0, 0) == 2);
        sure(hx.src.Yandex1.counter(2, [1, 2, 2, 3, 2], 3, 2) == 3);
    }

    public static function arrayFill() {
        Sys.println("Test arrayFill");
        sure(hx.src.Yandex1.arrayFill(3, 5).equals([3, 3, 3, 3, 3]));
    }

    public static function flatmap() {
        Sys.println("Test flatmap");
        sure(hx.src.Yandex1.flatmap([[1, 2, 3], [2, 4]]).equals([1, 2, 3, 2, 4]));
    }

    public static function runAll() {
        Yandex1.foldUnique();
        Yandex1.intersecDublicated();
        Yandex1.counter();
        Yandex1.arrayFill();
        Yandex1.flatmap();
    }
}