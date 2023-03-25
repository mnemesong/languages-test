export type IOQuestionFunc = (q: string, fn: (a: string) => void) => void;
export type IOOutputFunc = (s: string) => void;
export type ProgramFunc = (q: IOQuestionFunc, o: IOOutputFunc) => void;
export declare const run: ProgramFunc;
