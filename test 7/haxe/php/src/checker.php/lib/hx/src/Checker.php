<?php
/**
 */

namespace hx\src;

use \php\Boot;

class Checker {
	/**
	 * @return void
	 */
	public static function main () {
		#hx/src/Checker.hx:10: characters 21-47
		$_g = new \Array_hx();
		#hx/src/Checker.hx:10: characters 32-36
		$_g1 = 1;
		#hx/src/Checker.hx:10: characters 22-46
		while ($_g1 < 1000000) {
			#hx/src/Checker.hx:10: characters 32-43
			$i = $_g1++;
			#hx/src/Checker.hx:10: characters 45-46
			$_g->arr[$_g->length++] = $i;
		}
		#hx/src/Checker.hx:10: lines 10-11
		$result = [];
		$data = $_g->arr;
		$_g_current = 0;
		$_g_length = \count($data);
		$_g_data = $data;
		while ($_g_current < $_g_length) {
			$item = $_g_data[$_g_current++];
			$result[] = (-5 + 10 * (\mt_rand() / \mt_getrandmax()));
		}
		$range = \Array_hx::wrap($result);
		#hx/src/Checker.hx:12: characters 9-36
		$startDate = \Date::now();
		#hx/src/Checker.hx:13: characters 22-55
		$result = [];
		$data = $range->arr;
		$_g_current = 0;
		$_g_length = \count($data);
		$_g_data = $data;
		while ($_g_current < $_g_length) {
			$item = $_g_data[$_g_current++];
			$result[] = ArcFunc::calc($item);
		}
		#hx/src/Checker.hx:13: characters 9-56
		$result1 = \Array_hx::wrap($result);
		#hx/src/Checker.hx:14: characters 9-66
		$resSum = \Lambda::fold($result1, function ($i, $acc) {
			#hx/src/Checker.hx:14: characters 54-61
			return $acc + $i;
		}, 0);
		#hx/src/Checker.hx:15: characters 9-37
		$finishDate = \Date::now();
		#hx/src/Checker.hx:16: characters 9-66
		$msDelta = $finishDate->getTime() - $startDate->getTime();
		#hx/src/Checker.hx:17: characters 9-54
		echo(\Std::string("Time delta: " . ($msDelta??'null') . " ms") . \PHP_EOL);
		#hx/src/Checker.hx:18: characters 9-51
		echo(\Std::string("Result len " . ($result1->length??'null')) . \PHP_EOL);
		#hx/src/Checker.hx:19: characters 9-44
		echo(\Std::string("Result sum " . ($resSum??'null')) . \PHP_EOL);
	}
}

Boot::registerClass(Checker::class, 'hx.src.Checker');
