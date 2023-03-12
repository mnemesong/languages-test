(ns hello.yandex2-test
  (:require [clojure.test :refer :all]
            hello.yandex2))

(deftest test-in-count-1
  (test (is (= (hello.yandex2/in-count (list (list \A 2) (list \B 2)) (list \B 1)) [(list \A 2) (list \B 3)]))))

(deftest test-squash-it 
  (test (is (= (hello.yandex2/squash-it [(list (char \A) 3) (list (char \B) 2)]) "A3B2"))))