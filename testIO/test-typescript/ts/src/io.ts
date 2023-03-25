import { createInterface } from "readline";
import { IOQuestionFunc, IOOutputFunc } from "./main";

export const ioQuestion: IOQuestionFunc = (q, f) => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question(q, (a: string) => {
        f(a)
        rl.close()
    }) 
}

export const ioOutput: IOOutputFunc = (s) => {
    console.log(s)
}