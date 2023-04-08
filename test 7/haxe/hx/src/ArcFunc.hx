package hx.src;

import Math;

class ArcFunc
{
    @:pure
    public static function calc(v: Float): Float {
        return (1.0 / (1.0 + Math.exp(-1.0 * v)));
    }
}