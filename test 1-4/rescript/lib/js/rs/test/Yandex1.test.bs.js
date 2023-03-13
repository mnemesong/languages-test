// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Mocha$RescriptMocha = require("rescript-mocha/lib/js/src/Mocha.bs.js");
var Yandex1$YandexTasks = require("../src/Yandex1.bs.js");
var Promise$RescriptMocha = require("rescript-mocha/lib/js/src/Promise.bs.js");

Mocha$RescriptMocha.describe("Yandex1")(undefined, undefined, undefined, (function (param) {
        Mocha$RescriptMocha.describe("addIfUniq")(undefined, undefined, undefined, (function (param) {
                Mocha$RescriptMocha.it("addIfUniq 1")(undefined, undefined, undefined, (function (param) {
                        if (Caml_obj.equal(Yandex1$YandexTasks.addIfUniq([
                                    1,
                                    2,
                                    3
                                  ], 2), [
                                1,
                                2,
                                3
                              ])) {
                          return ;
                        }
                        throw {
                              RE_EXN_ID: "Assert_failure",
                              _1: [
                                "Yandex1.test.res",
                                10,
                                12
                              ],
                              Error: new Error()
                            };
                      }));
                Mocha$RescriptMocha.it("addIfUniq 2")(undefined, undefined, undefined, (function (param) {
                        if (Caml_obj.equal(Yandex1$YandexTasks.addIfUniq([
                                    1,
                                    2,
                                    3
                                  ], 4), [
                                1,
                                2,
                                3,
                                4
                              ])) {
                          return ;
                        }
                        throw {
                              RE_EXN_ID: "Assert_failure",
                              _1: [
                                "Yandex1.test.res",
                                14,
                                12
                              ],
                              Error: new Error()
                            };
                      }));
              }));
        Mocha$RescriptMocha.describe("counter")(undefined, undefined, undefined, (function (param) {
                Mocha$RescriptMocha.it("counter 1")(undefined, undefined, undefined, (function (param) {
                        if (Yandex1$YandexTasks.counter([
                                1,
                                2,
                                2,
                                3
                              ], 2) === 2) {
                          return ;
                        }
                        throw {
                              RE_EXN_ID: "Assert_failure",
                              _1: [
                                "Yandex1.test.res",
                                21,
                                12
                              ],
                              Error: new Error()
                            };
                      }));
              }));
        Mocha$RescriptMocha.describe("intersectWithDoublicates")(undefined, undefined, undefined, (function (param) {
                Mocha$RescriptMocha.it("intersectWithDoublicates 1")(undefined, undefined, undefined, (function (param) {
                        if (Caml_obj.equal(Yandex1$YandexTasks.intersectWithDoublicates([
                                    1,
                                    2,
                                    3,
                                    2,
                                    0,
                                    2
                                  ], [
                                    5,
                                    1,
                                    2,
                                    7,
                                    3,
                                    2
                                  ]), [
                                1,
                                2,
                                2,
                                3
                              ])) {
                          return ;
                        }
                        throw {
                              RE_EXN_ID: "Assert_failure",
                              _1: [
                                "Yandex1.test.res",
                                26,
                                12
                              ],
                              Error: new Error()
                            };
                      }));
              }));
      }));

var it$p = Promise$RescriptMocha.it;

var it_skip$p = Promise$RescriptMocha.it_skip;

exports.it$p = it$p;
exports.it_skip$p = it_skip$p;
/*  Not a pure module */
