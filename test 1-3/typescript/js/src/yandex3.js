const main = () => {
    const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(splitRecordToArr(groupToRecord(arr)));
};
export const groupToRecord = (arr) => arr.map(i => ({
    el: i,
    g: i.split('').sort().reduce((str, ch) => str.concat(ch))
}))
    .reduce((aggr, i) => addElemToPropertyGroup(aggr, i.g, i.el), {});
export const splitRecordToArr = (rec) => Object.keys(rec)
    .map(k => rec[k]);
export const addElemToPropertyGroup = (obj, propName, val) => (obj[propName]
    ? Object.assign(Object.assign({}, obj), { [propName]: obj[propName].concat(val) }) : Object.assign(Object.assign({}, obj), { [propName]: [val] }));
main();
