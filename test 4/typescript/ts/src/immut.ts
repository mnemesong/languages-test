const a = 2

const b: ReadonlyArray<number> = [1, 2, 3]

//b.push(4)

console.log(b)

type C = Readonly<Record<string, string>>

const c: C = {
    c1: "c1",
    c2: "c2",
}

//c.c2 = "c3"

function changeC(c: C): C {
    c.c1 = "c3"
    return c
}
