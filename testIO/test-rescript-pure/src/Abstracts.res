module Option = Js.Option

type pureConvertor<'inpStatefulObject, 'outStatefulObject> = ('inpStatefulObject) => 'outStatefulObject

type stateGetting<'inpStatefulObject> = () => option<'inpStatefulObject>

type stateAppyer<'outStatefulObject> = ('outStatefulObject) => unit

type stateChanger<'inpStatefulObject, 'outStatefulObject> = (
    stateGetting<'inpStatefulObject>,
    pureConvertor<'inpStatefulObject, 'outStatefulObject>,
    stateAppyer<'outStatefulObject>
) => unit

let changeState: stateChanger<'a, 'b> = (stateGetting, pureConvertor, stateAppyer)
    => {
        let s = stateGetting()
        if (Option.isSome(s)) {
            s |> Option.getExn |> pureConvertor |> stateAppyer
        }
    }
