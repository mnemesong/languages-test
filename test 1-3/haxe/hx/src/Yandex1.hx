package hx.src;

import haxe.ds.List;

class Yandex1
{
    public static function foldUniq<T>(acc: Array<T>, last: Array<T>) {
        if(last.length > 0){
            var firstEl = last[0];
            var rest = last.copy();
            rest.shift();
            acc = (acc.indexOf(firstEl) == -1) ? acc.concat([firstEl]) : acc;
            return foldUniq(acc, rest);
        } else {
            return acc;
        }
    }

    public static function counter<T>(el: T, arr: Array<T>, offset: Int, c: Int) {
        return (arr.indexOf(el, offset) == -1)
            ? c
            : counter(el, arr, arr.indexOf(el, offset) + 1, c + 1);
    }

    public static function arrayFill<T>(el: T, count: Int): Array<T> {
        var result = [];
        for(i in 0...count) {
            result.push(el);
        }
        return result;
    }

    public static function flatmap<T>(arr: Array<Array<T>>) {
        var result = [];
        for(i in arr) {
            result = result.concat(i);
        }
        return result;
    }

    public static function intersecDublicated(arr1: Array<Int>, arr2: Array<Int>): Array<Int> {
        var unique = foldUniq([], arr1.filter(function (it) {
            return arr2.contains(it);
        }));
        var mapped = unique.map(function (it) {
            return {el: it, c: Math.min(Yandex1.counter(it, arr1, 0, 0), Yandex1.counter(it, arr2, 0, 0))};
        });
        var mapped2 = mapped.map(function (it) {
            return arrayFill(it.el, cast(it.c, Int));
        });
        return flatmap(mapped2);
    }
    
    public static function main() {
        var arr1 = [1, 2, 3, 2, 2, 0];
        var arr2 = [5, 1, 2, 7, 3, 2];
        Sys.println(Yandex1.intersecDublicated(arr1, arr2));
    }
}