// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");

function addIfUniq(acc, el) {
  if (acc.indexOf(el) === -1) {
    return acc.concat([el]);
  } else {
    return acc;
  }
}

function counter(arr, el) {
  return arr.filter(function (i) {
              return Caml_obj.equal(i, el);
            }).length;
}

function intersectWithDoublicates(arr1, arr2) {
  return arr1.filter(function (el) {
                      return arr2.some(function (i) {
                                  return i === el;
                                });
                    }).reduce(addIfUniq, []).map(function (el) {
                  return {
                          el: el,
                          c: Math.min(counter(arr1, el), counter(arr2, el))
                        };
                }).map(function (el) {
                return Caml_array.make(el.c, el.el);
              }).reduce((function (acc, el) {
                return acc.concat(el);
              }), []);
}

var Array2;

var $$Math$1;

exports.Array2 = Array2;
exports.$$Math = $$Math$1;
exports.addIfUniq = addIfUniq;
exports.counter = counter;
exports.intersectWithDoublicates = intersectWithDoublicates;
/* No side effect */
