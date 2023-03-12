(ns hello.yandex3-test
  (:require [clojure.test :refer :all]
            hello.yandex3))

(deftest test-mark-phrase 
  (test (is (= (hello.yandex3/mark-phrase "tan") ["tan" "ant"]))))

(deftest test-clear-marks 
  (test (is (= 
             (hello.yandex3/clear-marks {:ate [["eat" "ate"] ["tea" "ate"] ["ate" "ate"]], :ant [["tan" "ant"]]})
             [["eat" "tea" "ate"] ["tan"]]))))

(deftest test-group-marked-phrases 
  (test (is (= 
             (hello.yandex3/group-marked-phrases [["eat" "ate"] ["tea" "ate"] ["tan" "ant"] ["ate" "ate"]])
             [["eat" "tea" "ate"] ["tan"]]))))