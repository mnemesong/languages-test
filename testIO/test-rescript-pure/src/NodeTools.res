%%raw(`
    const readline = require("readline");
`)

let ioQuestion: Main.ioQuestionFunc = %raw(`
    function(q, f) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(q, (a) => {
            f(a)
            rl.close()
        });
    }
`)

let ioOutput: Main.ioOutputFunc = %raw(`
    function (s) {
        console.log(s);
    }
`)

