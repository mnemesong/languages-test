open RescriptMocha
let {it:it', it_skip:it_skip'} = module (Promise)
open Mocha

describe("addIfUniq", () => 
{
    it ("actFunc -10", () => 
        assert (Js.Math.abs_float(ActFunc.act(-10.0) -. 0.0) < 0.01)
    )
    
    it ("actFunc 0", () => 
        assert (Js.Math.abs_float(ActFunc.act(0.0) -. 0.5) < 0.01)
    )

    it ("actFunc 10", () => 
        assert (Js.Math.abs_float(ActFunc.act(10.0) -. 1.0) < 0.01)
    )
})