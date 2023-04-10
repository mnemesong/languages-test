import Lambda;
import Pipe;

@:pure
function cntr<T>(el: T, arr: Array<T>, offset: Int, c: Int) {
    return (arr.indexOf(el, offset) == -1)
        ? c
        : cntr(el, arr, arr.indexOf(el, offset) + 1, c + 1);
}

@:pure
function concatUniq (i, acc: Array<Int>): Array<Int> {
    return ((acc.indexOf(i) == -1) ? acc.concat([i]) : acc);
}

@:pure
function run(arr1: Array<Int>, arr2: Array<Int>): Array<Int> {
    var arr: Array<Int> = Lambda.fold(arr1, concatUniq, []);
    var arra = arr
        .filter( (it) -> (arr2.indexOf(it) != -1))
        .map( (it) -> { 
            el: it,  
            c: Math.min(cntr(it, arr1, 0, 0), cntr(it, arr2, 0, 0)) 
        } )
        .map( (it) -> [for (i in 0...cast(it.c, Int)) i].map( (i) -> it.el ) );
    return Lambda.flatten(arra);
}

function main() {
    var arr1 = [1, 2, 3, 2, 2, 0];
    var arr2 = [5, 1, 2, 7, 3, 2];
    Sys.println(run(arr1, arr2));
    Sys.println("HEllo!");
}