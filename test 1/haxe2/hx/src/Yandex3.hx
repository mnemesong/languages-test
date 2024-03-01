package hx.src;

using Lambda;

typedef Grouper = {
	var strs:Array<String>;
	var id:String;
}

class Yandex3 {
	public static function group(arr:Array<String>):Array<Array<String>> {
		var grouped:Array<Grouper> = arr.fold((el, acc:Array<Grouper>) -> {
			var id1 = el.split("");
			id1.sort((a, b) -> ((a > b) ? 1 : -1));
			var id = id1.fold((el, acc:String) -> (acc + el), "");
			var groupIndex = acc.findIndex(g -> g.id == id);
			if (groupIndex == -1) {
				return acc.concat([{strs: [el], id: id}]);
			}
			return acc.mapi((i, v) -> (i == groupIndex) ? v : {id: v.id, strs: v.strs.concat([el])});
		}, []);
		return grouped.map(el -> el.strs);
	}

	public static function main() {
		Sys.println(Yandex3.group(["eat", "tea", "tan", "ate", "nat", "bat"]));
	}
}
