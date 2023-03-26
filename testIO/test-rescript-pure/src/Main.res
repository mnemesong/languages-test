type ioQuestionFunc = (string, (string) => unit) => unit

type ioOutputFunc = (string) => unit 

type programFunc = (ioQuestionFunc, ioOutputFunc) => unit

let run: programFunc = (ioQuestion, ioOutput) => {
    ioQuestion("Введите ваше имя", (s) => {
        ioOutput("Привет " ++ s)
    })
}