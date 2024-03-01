export {};
declare type RegroupStrings = (rec: Record<string, string[]>) => string[][];
export declare const groupToRecord: (arr: string[]) => Record<string, string[]>;
export declare const splitRecordToArr: RegroupStrings;
export declare const addElemToPropertyGroup: (obj: Record<string, string[]>, propName: string, val: string) => Record<string, string[]>;
