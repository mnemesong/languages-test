export {};
export declare const groupToRecord: (arr: Array<string>) => Record<string, string[]>;
export declare const splitRecordToArr: (rec: Record<string, string[]>) => Array<Array<string>>;
export declare const addElemToPropertyGroup: (obj: Record<string, string[]>, propName: string, val: string) => Record<string, string[]>;
