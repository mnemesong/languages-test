<?php
/**
 */

use \php\Boot;

/**
 **
 * Copyright (c) 2013 Jason O'Neil
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 **
 */
class Random {
	/**
	 * Return a random boolean value (true or false)
	 * 
	 * @return bool
	 */
	public static function bool () {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:17: characters 3-29
		return (mt_rand() / mt_getrandmax()) < 0.5;
	}

	/**
	 * Return a random date & time from within a range.  The behaviour is unspecified if either `earliest` or `latest` is null.  Earliest and Latest are inclusive
	 * 
	 * @param \Date $earliest
	 * @param \Date $latest
	 * 
	 * @return \Date
	 */
	public static function date ($earliest, $latest) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:47: characters 25-68
		$from = $earliest->getTime();
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:47: characters 3-70
		return \Date::fromTime($from + ($latest->getTime() - $from) * (mt_rand() / mt_getrandmax()));
	}

	/**
	 * Return a random constructor from an Enum.  Will return null if the enum has no constructors. Only works with enum constructors that take no parameters.
	 * 
	 * @param Enum $e
	 * 
	 * @return mixed
	 */
	public static function enumConstructor ($e) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:81: characters 10-56
		if ($e !== null) {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:81: characters 22-49
			$arr = \Type::allEnums($e);
			if (($arr !== null) && ($arr->length > 0)) {
				return ($arr->arr[(int)(floor(($arr->length - 1 + 1) * (mt_rand() / mt_getrandmax())))] ?? null);
			} else {
				return null;
			}
		} else {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:81: characters 52-56
			return null;
		}
	}

	/**
	 * Return a random float between 'from' and 'to', inclusive.
	 * 
	 * @param float $from
	 * @param float $to
	 * 
	 * @return float
	 */
	public static function float ($from, $to) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:29: characters 3-46
		return $from + ($to - $from) * (mt_rand() / mt_getrandmax());
	}

	/**
	 * Return a random item from an array.  Will return null if the array is null or empty.
	 * 
	 * @param mixed[]|\Array_hx $arr
	 * 
	 * @return mixed
	 */
	public static function fromArray ($arr) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:53: characters 10-78
		if (($arr !== null) && ($arr->length > 0)) {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:53: characters 44-71
			return ($arr->arr[(int)(floor(($arr->length - 1 + 1) * (mt_rand() / mt_getrandmax())))] ?? null);
		} else {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:53: characters 74-78
			return null;
		}
	}

	/**
	 * Return a random item from an iterable.  Will return null if the iterable is null or empty.
	 * 
	 * @param object $it
	 * 
	 * @return mixed
	 */
	public static function fromIterable ($it) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:75: characters 10-59
		if ($it !== null) {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:75: characters 25-52
			$arr = \Lambda::array($it);
			if (($arr !== null) && ($arr->length > 0)) {
				return ($arr->arr[(int)(floor(($arr->length - 1 + 1) * (mt_rand() / mt_getrandmax())))] ?? null);
			} else {
				return null;
			}
		} else {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:75: characters 55-59
			return null;
		}
	}

	/**
	 * Return a random integer between 'from' and 'to', inclusive.
	 * 
	 * @param int $from
	 * @param int $to
	 * 
	 * @return int
	 */
	public static function int ($from, $to) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:23: characters 3-62
		return $from + (int)(floor(($to - $from + 1) * (mt_rand() / mt_getrandmax())));
	}

	/**
	 * Shuffle an Array.  This operation affects the array in place, and returns that array.
	 * The shuffle algorithm used is a variation of the [Fisher Yates Shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
	 * 
	 * @param mixed[]|\Array_hx $arr
	 * 
	 * @return mixed[]|\Array_hx
	 */
	public static function shuffle ($arr) {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:60: lines 60-68
		if ($arr !== null) {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:61: characters 14-18
			$_g = 0;
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:61: characters 18-28
			$_g1 = $arr->length;
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:61: lines 61-67
			while ($_g < $_g1) {
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:61: characters 14-28
				$i = $_g++;
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:62: characters 5-36
				$j = (int)(floor(($arr->length - 1 + 1) * (mt_rand() / mt_getrandmax())));
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:63: characters 5-20
				$a = ($arr->arr[$i] ?? null);
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:64: characters 5-20
				$b = ($arr->arr[$j] ?? null);
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:65: characters 5-15
				$arr->offsetSet($i, $b);
				#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:66: characters 5-15
				$arr->offsetSet($j, $a);
			}
		}
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:69: characters 3-13
		return $arr;
	}

	/**
	 * Return a random string of a certain length.  You can optionally specify
	 * which characters to use, otherwise the default is (a-zA-Z0-9)
	 * 
	 * @param int $length
	 * @param string $charactersToUse
	 * 
	 * @return string
	 */
	public static function string ($length, $charactersToUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:35: lines 35-42
		if ($charactersToUse === null) {
			$charactersToUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		}
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:36: characters 3-16
		$str = "";
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:37: characters 13-17
		$_g = 0;
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:37: characters 17-23
		$_g1 = $length;
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:37: lines 37-40
		while ($_g < $_g1) {
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:37: characters 13-23
			$i = $_g++;
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:39: characters 11-76
			$index = (int)(floor((mb_strlen($charactersToUse) - 1 + 1) * (mt_rand() / mt_getrandmax())));
			#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:39: characters 4-76
			$str = ($str??'null') . (($index < 0 ? "" : mb_substr($charactersToUse, $index, 1))??'null');
		}
		#D:\haxe\haxe\lib\random/1,4,1/src/Random.hx:41: characters 3-13
		return $str;
	}
}

Boot::registerClass(Random::class, 'Random');
