package hx.src;

import haxe.ds.List;

class Yandex1
{
    public static function cntr<T>(el: T, arr: Array<T>, offset: Int, c: Int) {
        return (arr.indexOf(el, offset) == -1)
            ? c
            : cntr(el, arr, arr.indexOf(el, offset) + 1, c + 1);
    }

    public static function run(arr1: Array<Int>, arr2: Array<Int>): Array<Int> 
    {
        var arr: Array<Int> = Lambda.fold(arr1, 
            (i, acc: Array<Int>) -> ((acc.indexOf(i) == -1) ? acc.concat([i]) : acc), 
            []);
        var arr2 = arr
            .filter( (it) -> (arr2.indexOf(it) != -1))
            .map( (it) -> { 
                el: it,  
                c: Math.min(Yandex1.cntr(it, arr1, 0, 0), Yandex1.cntr(it, arr2, 0, 0)) 
            } )
            .map( (it) -> [for (i in 0...cast(it.c, Int)) i].map( (i) -> it.el ) );
        return Lambda.flatten(arr2);
    }
    
    public static function main() {
        var arr1 = [1, 2, 3, 2, 2, 0];
        var arr2 = [5, 1, 2, 7, 3, 2];
        Sys.println(Yandex1.run(arr1, arr2));
    }
}