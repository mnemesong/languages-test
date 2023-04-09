<?php
/**
 */

namespace hx\src;

use \php\Boot;

class ArcFunc {
	/**
	 * @param float $v
	 * 
	 * @return float
	 */
	public static function calc ($v) {
		#hx/src/ArcFunc.hx:9: characters 9-50
		return 1.0 / (1.0 + \exp(-1.0 * $v));
	}
}

Boot::registerClass(ArcFunc::class, 'hx.src.ArcFunc');
