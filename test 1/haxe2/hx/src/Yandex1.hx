package hx.src;

using Lambda;

class Yandex1 {
	public static function arrayIntersect(arr1:Array<Int>, arr2:Array<Int>):Array<Int> {
		var uniq = arr1.fold((el, acc:Array<Int>) -> {
			return arr2.contains(el) && !acc.contains(el) ? acc.concat([el]) : acc;
		}, []);
		var counters:Array<Array<Int>> = uniq.map(s -> {
			var arrIncludesCnt = (arr:Array<Int>) -> arr.filter(el -> el == s).length;
			var cnt = Std.int(Math.min(arrIncludesCnt(arr1), arrIncludesCnt(arr2)));
			return [for (i in 0...cnt) s];
		});
		return counters.fold((el:Array<Int>, acc:Array<Int>) -> acc.concat(el), []);
	}

	public static function main() {
		var arr1 = [1, 2, 3, 2, 0, 2];
		var arr2 = [5, 1, 2, 7, 3, 2];
		Sys.println(Yandex1.arrayIntersect(arr1, arr2));
	}
}
