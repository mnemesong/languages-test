type consoleQuestionFunc = (string, (string) => unit) => unit
let consoleQuestion: consoleQuestionFunc
    = (s, proc) => RescriptNodejs.Readline.make({
        input: process.stdin,
        output: process.stdout,
    })
    |> Readline.question(s, proc) 