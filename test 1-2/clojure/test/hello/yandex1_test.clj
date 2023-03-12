(ns hello.yandex1-test
(:require [clojure.test :refer :all]
         hello.yandex1))

(deftest test-fill-rec-1
  (testing (is (= (hello.yandex1/fill-rec [2 1] 1 0) [2 1]))))

(deftest test-fill-rec-2
  (testing (is (= (hello.yandex1/fill-rec [2 1] 1 1) [2 1 1]))))

(deftest test-intersect-with-repeats
  (testing (is (= (hello.yandex1/intersect-with-repeats [1 2 3 2 2 0] [5 1 2 7 3 2]) [1 2 2 3]))))
