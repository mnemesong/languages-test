import { activFunction } from "./node";

const range = Array.from(Array(1000000).keys())
    .map(i => Math.random() * 10 - 5)

const startTime = Date.now();

const result = range
    .map(i => activFunction(i))
    .reduce((acc, el) => acc + el)

const finishTime = Date.now();

console.log("result: ", result)

console.log("time: ", finishTime - startTime)