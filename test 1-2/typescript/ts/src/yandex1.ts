export {};

const main = () => {
    const arr1 = [1, 2, 3, 2, 2, 0]
    const arr2 = [5, 1, 2, 7, 3, 2]
    console.log(intersectWithReplications(arr1, arr2))
}

export const countSame = (arr: Array<number>, el: number): number =>
    arr.filter((k) => (k === el)).length

export const intersectWithReplications = 
    (arr1: Array<number>, arr2: Array<number>): Array<number> =>
        arr1.filter( i => arr2.includes(i) ) //intersect
            .filter((v, i, arr) => (arr.indexOf(v) === i)) //uniq
            .map((el) => { return {el: el, c: Math.min(countSame(arr1, el), countSame(arr2, el))} })
            .map((el) => Array(el.c).fill(el.el))
            .reduce((acc, cur) => acc.concat(cur))

main();