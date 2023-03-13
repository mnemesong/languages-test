"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashStr = void 0;
var main = function () {
    var str = "AAABBBCCXYZDDDDAAAABB";
    console.log((0, exports.hashStr)(str));
};
var hashStr = function (str) {
    return str.split('')
        .map(function (el, i) { return { el: el, i: i + 1 }; })
        .filter(function (el, i) { return (((i + 1) <= str.length) && (str[i + 1] !== el.el)); })
        .reduce(function (aggr, n) { return aggr.concat({
        el: n.el,
        i: n.i,
        d: n.i - ((aggr.slice(-1).length > 0) ? aggr[aggr.length - 1].i : 0),
    }); }, [])
        .map(function (n) { return n.el.concat((n.d > 1) ? n.d.toString() : ""); })
        .reduce(function (aggr, str) { return aggr.concat(str); });
};
exports.hashStr = hashStr;
main();
