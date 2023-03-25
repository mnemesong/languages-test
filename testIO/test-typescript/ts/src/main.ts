"strict"

export type IOQuestionFunc = (q: string, fn: (a: string) => void) => void

export type IOOutputFunc = (s: string) => void 

export type ProgramFunc = (q: IOQuestionFunc, o: IOOutputFunc) => void

export const run: ProgramFunc = (IOQuestion, IOOutput) => {
    IOQuestion("Введите ваше имя", (s) => {
        IOOutput("Привет " + s)
    })
}