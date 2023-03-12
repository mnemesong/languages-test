export {};

const main = () => {
    const str = "AAABBBCCXYZDDDDAAAABB"
    console.log(hashStr(str))
}

type Counter = {
    el: string,
    i: number,
    d: number,
}

export const hashStr = 
    ( str: string ): string =>
        str.split('')
            .map( (el, i) => {return {el: el, i: i + 1}} )
            .filter( (el, i) => (((i + 1) <= str.length) && (str[i + 1] !== el.el)) )
            .reduce( (aggr: Array<Counter>, n: Counter) => aggr.concat({
                el: n.el, 
                i: n.i,
                d: n.i - ((aggr.slice(-1).length > 0) ? aggr[aggr.length - 1].i : 0),
            }), [] )
            .map( n => n.el.concat((n.d > 1) ? n.d.toString() : ""))
            .reduce( (aggr, str) => aggr.concat(str) )

main()