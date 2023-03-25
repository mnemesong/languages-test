"strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var run = function (IOQuestion, IOOutput) {
    IOQuestion("Введите ваше имя", function (s) {
        IOOutput("Привет " + s);
    });
};
exports.run = run;
