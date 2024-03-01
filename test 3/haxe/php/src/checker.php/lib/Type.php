<?php
/**
 */

use \php\Boot;

/**
 * The Haxe Reflection API allows retrieval of type information at runtime.
 * This class complements the more lightweight Reflect class, with a focus on
 * class and enum instances.
 * @see https://haxe.org/manual/types.html
 * @see https://haxe.org/manual/std-reflection.html
 */
class Type {
	/**
	 * Returns a list of all constructors of enum `e` that require no
	 * arguments.
	 * This may return the empty Array `[]` if all constructors of `e` require
	 * arguments.
	 * Otherwise an instance of `e` constructed through each of its non-
	 * argument constructors is returned, in the order of the constructor
	 * declaration.
	 * If `e` is null, the result is unspecified.
	 * 
	 * @param Enum $e
	 * 
	 * @return mixed[]|\Array_hx
	 */
	public static function allEnums ($e) {
		#D:\haxe\haxe\std/php/_std/Type.hx:341: lines 341-342
		if ($e === null) {
			#D:\haxe\haxe\std/php/_std/Type.hx:342: characters 4-15
			return null;
		}
		#D:\haxe\haxe\std/php/_std/Type.hx:344: characters 3-43
		$phpName = $e->phpClassName;
		#D:\haxe\haxe\std/php/_std/Type.hx:346: characters 3-19
		$result = new \Array_hx();
		#D:\haxe\haxe\std/php/_std/Type.hx:348: lines 348-353
		$_g = 0;
		$_g1 = Type::getEnumConstructs($e);
		while ($_g < $_g1->length) {
			#D:\haxe\haxe\std/php/_std/Type.hx:348: characters 8-12
			$name = ($_g1->arr[$_g] ?? null);
			#D:\haxe\haxe\std/php/_std/Type.hx:348: lines 348-353
			++$_g;
			#D:\haxe\haxe\std/php/_std/Type.hx:349: characters 4-57
			$reflection = new \ReflectionMethod($phpName, $name);
			#D:\haxe\haxe\std/php/_std/Type.hx:350: lines 350-352
			if ($reflection->getNumberOfParameters() === 0) {
				#D:\haxe\haxe\std/php/_std/Type.hx:351: characters 5-41
				$x = $reflection->invoke(null);
				$result->arr[$result->length++] = $x;
			}
		}
		#D:\haxe\haxe\std/php/_std/Type.hx:355: characters 3-16
		return $result;
	}

	/**
	 * Returns a list of the names of all constructors of enum `e`.
	 * The order of the constructor names in the returned Array is preserved
	 * from the original syntax.
	 * If `e` is null, the result is unspecified.
	 * 
	 * @param Enum $e
	 * 
	 * @return string[]|\Array_hx
	 */
	public static function getEnumConstructs ($e) {
		#D:\haxe\haxe\std/php/_std/Type.hx:261: lines 261-262
		if ($e === null) {
			#D:\haxe\haxe\std/php/_std/Type.hx:262: characters 4-15
			return null;
		}
		#D:\haxe\haxe\std/php/_std/Type.hx:263: characters 3-66
		return \Array_hx::wrap($e->__hx__list());
	}
}

Boot::registerClass(Type::class, 'Type');
