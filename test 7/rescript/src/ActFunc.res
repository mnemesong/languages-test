let act = (v: float): float
    =>(1.0 /. (1.0 +. Js.Math.exp(-1.0 *. v)))