export {}

const main = () => {
    const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
    console.log(splitRecordToArr(groupToRecord(arr)))
}

export const groupToRecord =  (arr: string[]): Record<string, string[]> =>
        arr .map( i => ({
                el: i, 
                g: i.split('').sort().reduce( (str, ch) => str.concat(ch) )
            }) )
            .reduce( (aggr: Record<string, string[]>, i) => 
                addElemToPropertyGroup(aggr, i.g, i.el), {})

export const splitRecordToArr =(rec: Record<string, string[]>): string[][] =>
        Object.keys(rec)
            .map( k => rec[k] )

export const addElemToPropertyGroup = (
    obj: Record<string, string[]>, 
    propName: string, val: string
): Record<string, string[]> =>
        (obj[propName] 
            ? { ...obj, [propName]: obj[propName].concat(val) } 
            : { ...obj, [propName]: [val] })
    
main()