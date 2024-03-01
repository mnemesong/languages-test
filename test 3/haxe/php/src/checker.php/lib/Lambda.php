<?php
/**
 */

use \php\Boot;

/**
 * The `Lambda` class is a collection of methods to support functional
 * programming. It is ideally used with `using Lambda` and then acts as an
 * extension to Iterable types.
 * On static platforms, working with the Iterable structure might be slower
 * than performing the operations directly on known types, such as Array and
 * List.
 * If the first argument to any of the methods is null, the result is
 * unspecified.
 * @see https://haxe.org/manual/std-Lambda.html
 */
class Lambda {
	/**
	 * Creates an Array from Iterable `it`.
	 * If `it` is an Array, this function returns a copy of it.
	 * 
	 * @param object $it
	 * 
	 * @return mixed[]|\Array_hx
	 */
	public static function array ($it) {
		#D:\haxe\haxe\std/Lambda.hx:46: characters 3-26
		$a = new \Array_hx();
		#D:\haxe\haxe\std/Lambda.hx:47: characters 13-15
		$i = $it->iterator();
		while ($i->hasNext()) {
			#D:\haxe\haxe\std/Lambda.hx:47: lines 47-48
			$i1 = $i->next();
			#D:\haxe\haxe\std/Lambda.hx:48: characters 4-13
			$a->arr[$a->length++] = $i1;
		}
		#D:\haxe\haxe\std/Lambda.hx:49: characters 3-11
		return $a;
	}

	/**
	 * Functional fold on Iterable `it`, using function `f` with start argument
	 * `first`.
	 * If `it` has no elements, the result is `first`.
	 * Otherwise the first element of `it` is passed to `f` alongside `first`.
	 * The result of that call is then passed to `f` with the next element of
	 * `it`, and so on until `it` has no more elements.
	 * If `it` or `f` are null, the result is unspecified.
	 * 
	 * @param object $it
	 * @param \Closure $f
	 * @param mixed $first
	 * 
	 * @return mixed
	 */
	public static function fold ($it, $f, $first) {
		#D:\haxe\haxe\std/Lambda.hx:184: characters 13-15
		$x = $it->iterator();
		while ($x->hasNext()) {
			#D:\haxe\haxe\std/Lambda.hx:184: lines 184-185
			$x1 = $x->next();
			#D:\haxe\haxe\std/Lambda.hx:185: characters 4-23
			$first = $f($x1, $first);
		}
		#D:\haxe\haxe\std/Lambda.hx:186: characters 3-15
		return $first;
	}
}

Boot::registerClass(Lambda::class, 'Lambda');
