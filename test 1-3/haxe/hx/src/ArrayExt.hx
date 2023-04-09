package hx.src;

class ArrayExt {
    public static inline function last<T>(a:Array<T>):T {
        return a[a.length - 1];
    }

    public static inline function updateLast<T>(a: Array<T>, fn: (t: T) -> T) {
        var arrFirst: Array<T> = a.slice(0, a.length - 1);
        var arrLast: T = ArrayExt.last(a);
        var arrLastModified: T = fn(arrLast);
        return arrFirst.concat([arrLastModified]);
    }
}