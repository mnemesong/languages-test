import Lambda;

typedef Counter = {
    el: String,
    c: Int,
}

@:pure
function updateLast<T>(a: Array<T>, fn: (t: T) -> T) {
    var arrFirst: Array<T> = a.slice(0, a.length - 1);
    var arrLast: T = a[a.length - 1];
    var arrLastModified: T = fn(arrLast);
    return arrFirst.concat([arrLastModified]);
}

@:pure
function run(str1: String): String
{
    var symbols = str1.split("");
    var foldF = (s: String, acc: Array<Counter>) -> 
        (acc.length == 0)
            ? acc.concat([{el: s, c: 1}])
            : ((acc[acc.length - 1].el == s)
                ? (updateLast(acc, (el) -> {el: el.el, c: el.c + 1}))
                : (acc.concat([{el: s, c: 1}])));
    var result: Array<String> = Lambda.fold(symbols, foldF, [])
        .map((el: Counter) -> el.el + ((el.c > 1) ? Std.string(el.c) : ""));
    return Lambda.fold(result, (el: String, acc: String) -> (acc + el), "");
}

function main() {
    var str1 = "AAABBBCCXYZDDDDAAAABB";
    Sys.println(run(str1));
}