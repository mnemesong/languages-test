package hx.src;

using Lambda;

typedef Counter = {
	var ch : String;
	var cnt : Int;
}

class Yandex2 {

	public static function encode( str : String ) : String {
		var chars = str.split( "" );
		var counters = chars.fold( ( el, acc : Array<Counter> ) -> {
			if ( acc.length == 0 ) {
				return [{ ch : el, cnt : 1, }];
			}
			var last = acc[acc.length - 1];
			if ( last.ch == el ) {
				return acc
					.slice( 0, acc.length - 1 )
					.concat( [{ ch : el, cnt : last.cnt + 1 }] );
			}
			return acc.concat( [{ ch : el, cnt : 1 }] );
		}, [] );
		return counters.fold( ( el, acc : String ) -> {
			return acc + ( el.cnt == 1 ? el.ch : ( el.ch + Std.string( el.cnt ) ) );
		}, "" );
	}

	public static function main() {
		Sys.println( Yandex2.encode( "AAABBBCCXYZDDDDAAAABB" ) );
	}
}
