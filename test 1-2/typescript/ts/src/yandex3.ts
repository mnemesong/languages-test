export {}

const main = () => {
    const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
    console.log(groupMain(arr))
}

const groupMain = (arr: Array<string>): string[][] =>
        splitRecordToArr(groupToRecord(arr))

const groupToRecord =  (arr: Array<string>): Record<string, string[]> =>
        arr .map( i => {return {
                el: i, 
                g: i.split('').sort().reduce( (str, ch) => str.concat(ch) )
            }} )
            .reduce( (aggr: Record<string, string[]>, i) => addElemToPropertyGroup(aggr, i.g, i.el), {})

const splitRecordToArr =
    (rec: Record<string, string[]>): Array<Array<string>> =>
        Object.keys(rec)
            .map( k => rec[k] )

const addElemToPropertyGroup = 
    (obj: Record<string, string[]>, propName: string, val: string): Record<string, string[]> =>
        { return obj[propName] ? { ...obj, [propName]: obj[propName].concat(val) } : { ...obj, [propName]: [val] } }
    
main()